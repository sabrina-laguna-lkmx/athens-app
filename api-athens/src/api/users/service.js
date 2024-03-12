import {
  createToken,
  deleteTokenByUserId,
  findTokenByUserIdAndToken,
} from "../../repository/reset-password.js";
import {
  findByEmail,
  findById,
  updateEmail,
  updatePassword,
} from "../../repository/user-repository.js";
import { sendEmail } from "../../service/email-service.js";
import { resetPasswordTemplate } from "../../template/reset-password-.js";
import { formatDate } from "../../utils/format-date.js";
import { getRandomString, saltPassword } from "../../utils/password-utils.js";
import { PASSWORD_REGEX } from "../../utils/regex-utils.js";
import {
  generateExpirationToken,
  generateToken,
  validToken,
} from "../../utils/token-utils.js";

const SALT_LENGTH = 16;

const TOKEN_EXPIRATION_TIME_MINUTES = process.env.TOKEN_EXPIRATION_TIME_MINUTES;

export async function changeUserEmail(ctx) {
  const { email } = ctx.request.body;
  const { user_id } = ctx.req.user;

  await updateEmail(user_id, email);

  ctx.response.status = 204;
  ctx.body = {};
}

export async function changeUserPassword(ctx) {
  const { currentPassword, newPassword } = ctx.request.body;
  const { user_id } = ctx.req.user;

  const user = await findById(user_id);

  if (!user) {
    ctx.throw(
      404,
      JSON.stringify({
        code: "not_found",
        message: "User not found",
      })
    );
  }

  const currentPasswordHash = saltPassword(currentPassword, user.salt);
  console.log("current password has", currentPasswordHash);
  console.log("user hash", user.hash);

  if (currentPasswordHash !== user.hash) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "not_acceptable",
        message: "Credentials are not valid",
      })
    );
  }

  const newPasswordSalt = getRandomString(SALT_LENGTH);
  const newPasswordHash = saltPassword(newPassword, newPasswordSalt);

  await updatePassword(user_id, newPasswordHash, newPasswordSalt);

  ctx.response.status = 204;
  ctx.body = {};
}

export async function forgetPassword(ctx) {
  const { email } = ctx.request.body;
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

  const token = generateToken(user);
  const createdAt = generateExpirationToken(TOKEN_EXPIRATION_TIME_MINUTES);

  const new_token = await createToken(token, user, createdAt);

  try {
    await sendEmail(
      user.email,
      `Reset your password`,
      `You’ve successfully created your Athens Services’ account. To activate it, please click below to verify your email address.`,
      resetPasswordTemplate(
        `${process.env.PORTAL_URL}/en/reset-password?token=${new_token.token}&userId=${user.user_id}`
      )
    );
  } catch (e) {
    throw e;
  }

  ctx.status = 200;
}

export async function resetPassword(ctx) {
  const { userId, token } = ctx.params;
  const { newPassword } = ctx.request.body;

  if (!PASSWORD_REGEX.test(newPassword)) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "not_acceptable",
        message: "Password are not valid",
      })
    );
  }

  const user = await findById(userId);

  if (!user) {
    ctx.throw(
      404,
      JSON.stringify({
        code: "not_found",
        message: "User not found",
      })
    );
  }

  const token_reset = await findTokenByUserIdAndToken(user.user_id, token);

  if (!token_reset) {
    ctx.throw(
      400,
      JSON.stringify({
        code: "not_fount",
        message: "Token Not Found",
      })
    );
  }

  const tokenIsValid = validToken(
    token_reset.created_at,
    formatDate(new Date())
  );

  if (tokenIsValid) {
    const newPasswordSalt = getRandomString(SALT_LENGTH);
    const newPasswordHash = saltPassword(newPassword, newPasswordSalt);

    await updatePassword(userId, newPasswordHash, newPasswordSalt);
    await deleteTokenByUserId(token_reset.id);
  }

  ctx.status = 200;
}

export async function getUserById(ctx) {
  const { userId } = ctx.params;

  const user = await findById(userId);

  if (!user) {
    ctx.throw(
      404,
      JSON.stringify({
        code: "not_found",
        message: "User not found",
      })
    );
  }

  delete user.salt;
  delete user.hash;
  delete user.created_at;
  delete user.update_at;
  delete user.isActive;

  ctx.status = 200;
  ctx.body = { user };
}

export async function getTokenValidForUser(ctx) {
  const { token, userId } = ctx.params;

  const token_reset = await findTokenByUserIdAndToken(userId, token);

  if (!token_reset) {
    ctx.body = { tokenIsValid: false };
    ctx.status = 200;
    return
  };

  const tokenIsValid = validToken(
    token_reset.created_at,
    formatDate(new Date())
  );

  if (tokenIsValid) {
    ctx.body = { tokenIsValid: true };
    ctx.status = 200;
    return;
  }

  await deleteTokenByUserId(token_reset.id);
  ctx.body = { tokenIsValid: false };
  ctx.status = 200;
}
