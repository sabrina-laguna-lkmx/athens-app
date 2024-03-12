import { formatDate } from "./format-date.js";

export function generateToken() {
    return Math.random().toString(36).substring(2, 18);
}

export function generateExpirationToken(expiration) {

  const dateFormat = formatDate(new Date());

  const expirationToken = new Date(dateFormat.getTime() + parseInt(expiration));

  return expirationToken;
}

export function validToken(tokenCreatedAt, currentDate) {

  if (tokenCreatedAt > currentDate) {
    return true;
  }

  return false;
}

