import passport from "koa-passport";
import { getCustomerBills } from "./service.js";

export function registerRoutes(router) {
  router.get(
    "/accounts/:customerNumber/bills",
    passport.authenticate("jwt", { session: false }),
    getCustomerBills
  );
}
