export async function getBillingPreferences(ctx) {
  const customerNumber = ctx.params.customerNumber;
  const { accounts } = ctx.req.user;

  const account = accounts.find((account) => account.id == customerNumber);

  const userId = account.webPakId;

  const response = await fetch(
    `${process.env.API_URL}/accounts/${customerNumber}/users/${userId}/billing-options`
  );

  const billingPreferences = await response.json();

  ctx.body = billingPreferences;
  ctx.status = response.status;
}

export async function setBillingPreferences(ctx) {
  const { accounts } = ctx.req.user;

  const userId = accounts[0].webPakId;
  const customerNumber = accounts[0].id;

  const response = await fetch(
    `${process.env.API_URL}/accounts/${customerNumber}/users/${userId}/billing-options`,
    {
      method: "PUT",
      body: JSON.stringify(ctx.request.body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const billingPreferences = await response.json();

  ctx.body = billingPreferences;
  ctx.status = response.status;
}
