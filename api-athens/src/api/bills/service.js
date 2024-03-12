export async function getCustomerBills(ctx) {
  const customerNumber = ctx.params.customerNumber;

  const response = await fetch(
    `${process.env.API_URL}/accounts/${customerNumber}/bills`
  );

  const bills = await response.json();

  ctx.body = bills;
  ctx.status = response.status;
}
