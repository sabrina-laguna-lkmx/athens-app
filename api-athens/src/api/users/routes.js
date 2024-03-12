import passport from "koa-passport";
import { changeUserEmail, changeUserPassword, forgetPassword, getTokenValidForUser, getUserById, resetPassword } from "./service.js";

export function registerRoutes(router) {
  router.get(
    "/:userId/user",
    getUserById
  );
  router.put(
    "/me/email",
    passport.authenticate("jwt", { session: false }),
    changeUserEmail
  );
  router.put(
    "/me/password",
    passport.authenticate("jwt", { session: false }),
    changeUserPassword
  );
  router.post(
    "/me/forget-password",
    forgetPassword
  );
  router.put(
    "/:userId/rest-password/:token",
    resetPassword
  );
  router.get(
    "/:token/token-is-valid/:userId",
    getTokenValidForUser
  )
}
