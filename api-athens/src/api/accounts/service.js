export async function addAccountToUser(ctx) {
  if (!ctx.request.body) {
    ctx.throw(
      400,
      JSON.stringify({ code: "bad_request", message: "missing request body" })
    );
  }

  const { account } = ctx.request.body;

  if (!account) {
    ctx.throw(
      400,
      JSON.stringify({ code: "bad_request", message: "missing account number" })
    );
  }

  if (!account.includes("-")) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "bad_request",
        message: "incorrect account number format",
      })
    );
  }

  const [companyType, rawAccountNumber] = account.split("-");

  if (!companyType || !rawAccountNumber) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "bad_request",
        message: "incorrect account number format",
      })
    );
  }

  const customerAccount = parseInt(rawAccountNumber, 10);

  const response = await fetch(
    `${process.env.API_URL}/accounts/${customerAccount}/companies/${companyType}`
  );

  if (!response.ok && response.status === 404) {
    ctx.throw(
      404,
      JSON.stringify({ code: "not_found", message: "account number not found" })
    );
  }

  if (!response.ok) {
    ctx.throw(
      response.status,
      JSON.stringify({
        code: "not_valid",
        message: "account number is n ot valid",
      })
    );
  }

  const accountInfo = await response.json();

  // update customer accounts of user
  ctx.response.status = 200;
  ctx.body = accountInfo;
}
