import { parseStringPromise } from "xml2js";
import {
  createPaymentMethod,
  deleteById,
  editPaymentMethod,
  findById,
  findByUserId,
} from "../../repository/payment-methods-repository.js";

export async function getPaymentMethods(ctx) {
  const { user_id } = ctx.req.user;

  const paymentMethods = await findByUserId(user_id);

  ctx.body = paymentMethods;
  ctx.status = 200;
}

export async function savePaymentMethod(ctx) {
  const { user_id } = ctx.req.user;

  const body = ctx.request.body;

  const {
    creditCard,
    month,
    year,
    cvv2,
    accountType,
    billingAddress1,
    billingAddress2,
    city,
    state,
    zipCode,
    firstName,
    midInit,
    lastName,
  } = body;

  const xmlData = `<txn>
<ssl_merchant_ID>${process.env.CONVERGE_MERCHANT_ID}</ssl_merchant_ID>
<ssl_user_id>${process.env.CONVERGE_USER_ID}</ssl_user_id>
<ssl_pin>${process.env.CONVERGE_PIN_ID}</ssl_pin>
<ssl_transaction_type>CCGETTOKEN</ssl_transaction_type>
<ssl_card_number>${creditCard}</ssl_card_number>
<ssl_exp_date>${month.padStart(2, "0")}${year.slice(2)}</ssl_exp_date>
<ssl_cvv2cvc2>${cvv2}</ssl_cvv2cvc2>
<ssl_bin_lookup>Y</ssl_bin_lookup>
<ssl_add_token>Y</ssl_add_token>
<ssl_avs_address>${billingAddress1}</ssl_avs_address>
</txn>`;

  const response = await fetch(
    `${process.env.CONVERGE_API_URL}?xmldata=${xmlData}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    ctx.throw(response.status, await response.text());
  }

  const parsedResponse = await parseStringPromise(await response.text());

  const createdPayment = await createPaymentMethod({
    user_id,
    creditCard: parsedResponse.txn.ssl_card_number[0],
    accountType,
    billingAddress1,
    billingAddress2,
    city,
    state,
    zipCode,
    firstName,
    midInit,
    lastName,
    token: parsedResponse.txn.ssl_token[0],
    year,
    month,
  });

  ctx.body = createdPayment;
  ctx.status = 201;
}

export async function editMethod(ctx) {
  const body = ctx.request.body;

  const paymentMethodId = ctx.params.paymentMethodId;

  const {
    month,
    year,
    billingAddress1,
    billingAddress2,
    city,
    state,
    zipCode,
    firstName,
    midInit,
    lastName,
  } = body;

  const editedPaymentMethod = await editPaymentMethod({
    paymentMethodId,
    billingAddress1,
    billingAddress2,
    city,
    state,
    zipCode,
    firstName,
    midInit,
    lastName,
    year,
    month,
  });

  ctx.body = {};
  ctx.status = 200;
}

export async function getPaymentMethod(ctx) {
  const paymentMethodId = ctx.params.paymentMethodId;

  const paymentMethod = await findById(paymentMethodId);

  ctx.body = paymentMethod;
  ctx.status = 200;
}

export async function deletePaymentMethod(ctx) {
  const paymentMethodId = ctx.params.paymentMethodId;
  const { user_id } = ctx.req.user;

  await deleteById(paymentMethodId, user_id);

  ctx.body = {};
  ctx.status = 200;
}
