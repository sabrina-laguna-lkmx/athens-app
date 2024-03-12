import passport from "koa-passport";
import { addAccountToUser } from "./service.js";

export function registerRoutes(router) {
  router.post(
    "/accounts",
    passport.authenticate("jwt", { session: false }),
    addAccountToUser
  );
}
