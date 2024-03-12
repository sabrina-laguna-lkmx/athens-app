import jwt from "jsonwebtoken";
import {
  createToken,
  deleteTokenById,
  findTokenByUserIdAndToken,
} from "../../repository/active_account_repository.js";
import {
  activeUser,
  create,
  findByEmail,
} from "../../repository/user-repository.js";
import { sendEmail } from "../../service/email-service.js";
import { confirmEmailTemplate } from "../../template/confirm-email.js";
import { formatDate } from "../../utils/format-date.js";
import { getRandomString, saltPassword } from "../../utils/password-utils.js";
import { EMAIL_REGEX } from "../../utils/regex-utils.js";
import {
  generateExpirationToken,
  generateToken,
  validToken,
} from "../../utils/token-utils.js";

const TOKEN_EXPIRATION_ACCOUNT = process.env.TOKEN_EXPIRATION_ACCOUNT;
const SECRET_KEY = process.env.JWT_SECRET;
const JWT_CONFIG = {
  expiresIn: "1 day",
};
const SALT_LENGTH = 16;

export async function login(ctx) {
  const { email, password } = ctx.request.body;
  const user = await findByEmail(email);

  if (!user) {
    ctx.throw(
      401,
      JSON.stringify({
        code: "not_authorized",
        message: "Credentials are not valid",
      })
    );
  }

  if (!user.isActive) {
    ctx.throw(
      401,
      JSON.stringify({
        code: "not_active",
        message: "User no active",
      })
    );
  }

  const passwordHash = saltPassword(password, user.salt);

  if (passwordHash !== user.hash) {
    ctx.throw(
      401,
      JSON.stringify({
        code: "not_authorized",
        message: "Credentials are not valid",
      })
    );
  }

  const accounts = await getCustomerAccounts(email);

  delete user.salt;
  delete user.hash;
  delete user.created_at;
  delete user.update_at;

  const body = { ...user, accounts };

  const token = jwt.sign(body, SECRET_KEY, JWT_CONFIG);

  ctx.response.status = 200;
  ctx.body = { ...body, token };
}

export async function register(ctx) {
  const { email, password } = ctx.request.body;
  const user = await findByEmail(email);

  if (user) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "not_acceptable",
        message: "User already registered",
      })
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "not_acceptable",
        message: "Email are not valid",
      })
    );
  }

  const salt = getRandomString(SALT_LENGTH);
  const passwordHash = saltPassword(password, salt);

  const createdUser = await create({
    email,
    salt,
    hash: passwordHash,
  });

  delete createdUser.hash;
  delete createdUser.salt;

  const token = generateToken(user);
  const createdAt = generateExpirationToken(TOKEN_EXPIRATION_ACCOUNT);
  let new_token;

  try {
    new_token = await createToken(token, createdUser, createdAt);
  } catch (err) {
    console.log(err);
    throw err;
  }

  try {
    await sendEmail(
      email,
      `Confirm Your Email`,
      `You’ve successfully created your Athens Services’ account. To activate it, please click below to verify your email address.`,
      confirmEmailTemplate(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/${email}/activeAccount/${new_token.token}`
      )
    );
  } catch (e) {
    throw e;
  }

  ctx.response.status = 201;
  ctx.body = createdUser;
}

async function getCustomerAccounts(email) {
  const response = await fetch(
    `${process.env.API_URL}/users/emails/${email}/accounts`
  );

  const accounts = await response.json();

  const customerAccounts = accounts.map((account) => {
    const { city, postalCode } = account;
    return {
      id: account.customerNumber,
      company: account.company,
      webPakId: account.userId,
      address: account.formattedAddress,
      city: capitalizeCityName(city),
      postalCode,
    };
  });

  return customerAccounts;
}

function capitalizeCityName(city) {
  const words = city.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

export async function activeAccount(ctx) {
  const { email, token } = ctx.params;
  const user = await findByEmail(email);

  if (!user) {
    ctx.throw(
      404,
      JSON.stringify({
        code: "not_found",
        message: "User not found",
      })
    );
  }

  const token_active = await findTokenByUserIdAndToken(user.user_id, token);

  if (!token_active) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "not_fount",
        message: "Token Not Found",
      })
    );
  }

  const tokenIsValid = validToken(
    token_active.created_at,
    formatDate(new Date())
  );

  if (!user.isActive && tokenIsValid) {
    await activeUser(user.user_id);
    await deleteTokenById(token_active.id);
  }

  ctx.response.status = 200;
  ctx.redirect(`${process.env.PORTAL_URL}/en`);
}
