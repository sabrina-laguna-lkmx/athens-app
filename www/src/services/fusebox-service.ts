export async function redirectToPaymentPage() {
  const transactionToken = await generateTransactionToken(1.0);
  window.location.replace(
    `${process.env.NEXT_PUBLIC_FUSEBOX_PAYMENT_URL}?ssl_txn_auth_token=${transactionToken}`,
  );
}

export async function generateTransactionToken(amount: number) {
  const MERCHANT_ID = process.env.NEXT_PUBLIC_FUSEBOX_MERCHANT_ID;
  const USER_ID = process.env.NEXT_PUBLIC_FUSEBOX_USER_ID;
  const PIN = process.env.NEXT_PUBLIC_FUSEBOX_PIN;
  const VENDOR_ID = process.env.NEXT_PUBLIC_FUSEBOX_VENDOR_ID;
  const TRANSACTION_TYPE = "CCSALE";
  const INVOICE_NUMBER = generateRandomNumber(20);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FUSEBOX_SESSION_URL}?ssl_merchant_id=${MERCHANT_ID}&ssl_user_id=${USER_ID}&ssl_pin=${PIN}&ssl_transaction_type=${TRANSACTION_TYPE}&ssl_invoice_number=${INVOICE_NUMBER}&ssl_vendor_id=${VENDOR_ID}&ssl_amount=${amount}`,
      {
        method: "POST",
      },
    );

    const transactionToken = await response.text();

    return transactionToken;
  } catch (error) {
    console.error(error);
  }
}

function generateRandomNumber(len: number) {
  var arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

function dec2hex(dec: number) {
  return dec.toString(16).padStart(2, "0");
}
