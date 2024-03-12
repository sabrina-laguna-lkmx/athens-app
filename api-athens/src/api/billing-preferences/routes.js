import passport from "koa-passport";
import { getBillingPreferences, setBillingPreferences } from "./service.js";

export function registerRoutes(router) {
  router.get(
    "/accounts/:customerNumber/billing-preferences",
    passport.authenticate("jwt", { session: false }),
    getBillingPreferences
  );
  router.put(
    "/billing-preferences",
    passport.authenticate("jwt", { session: false }),
    setBillingPreferences
  );
}
