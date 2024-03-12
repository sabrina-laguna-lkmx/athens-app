import { findById } from "../../repository/payment-methods-repository.js";

export async function makePayment(ctx) {
  const { paymentMethodId, amount } = ctx.request.body;

  const paymentMethod = await findById(paymentMethodId);

  const xmlData = `
  <txn>
      <ssl_merchant_id>${process.env.CONVERGE_MERCHANT_ID}</ssl_merchant_id>
      <ssl_user_id>${process.env.CONVERGE_USER_ID}</ssl_user_id>
      <ssl_pin>${process.env.CONVERGE_PIN_ID}</ssl_pin>
      <ssl_test_mode>false</ssl_test_mode>
      <ssl_transaction_type>ccsale</ssl_transaction_type>
      <ssl_token>${paymentMethod.token}</ssl_token>
      <ssl_amount>${amount}</ssl_amount>
      <ssl_avs_address>${paymentMethod.billingAddress1}</ssl_avs_address>
      <ssl_avs_zip>${paymentMethod.zipCode}</ssl_avs_zip>
  </txn>`;

  const response = await fetch(
    `${process.env.CONVERGE_API_URL}?xmldata=${xmlData}`,
    {
      method: "POST",
    }
  );

  const responseText = await response.text();

  if (responseText.includes("errorCode")) {
    ctx.throw(400, JSON.stringify({ code: "failed", message: responseText }));
  }

  ctx.body = { code: "success", message: "Payment sucessful" };
  ctx.response.status = 201;
}
