export async function getCustomerAccountBalances(ctx) {
  const customerNumber = ctx.params.customerNumber;
  const company = ctx.params.company;

  console.log(ctx.req.user);

  const response = await fetch(
    `${process.env.API_URL}/accounts/${customerNumber}/companies/${company}/balances`
  );

  const balances = await response.json();

  ctx.body = balances;
  ctx.status = response.status;
}
