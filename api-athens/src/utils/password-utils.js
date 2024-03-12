import crypto from "crypto";

export function getRandomString(lenght) {
  return crypto
    .randomBytes(Math.ceil(lenght / 2))
    .toString("hex")
    .slice(0, lenght);
}

export function saltPassword(password, salt) {
  const hash = crypto.createHmac("sha512", salt);
  hash.update(password);

  return hash.digest("hex");
}
