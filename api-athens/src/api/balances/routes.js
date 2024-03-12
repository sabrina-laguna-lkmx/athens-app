import passport from "koa-passport";
import { getCustomerAccountBalances } from "./service.js";

export function registerRoutes(router) {
  router.get(
    "/accounts/:customerNumber/companies/:company/balances",
    passport.authenticate("jwt", { session: false }),
    getCustomerAccountBalances
  );
}
