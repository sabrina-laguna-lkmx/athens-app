import passport from "koa-passport";
import {
  deletePaymentMethod,
  editMethod,
  getPaymentMethod,
  getPaymentMethods,
  savePaymentMethod,
} from "./service.js";

export function registerRoutes(router) {
  router.get(
    "/payment-methods",
    passport.authenticate("jwt", { session: false }),
    getPaymentMethods
  );
  router.post(
    "/payment-methods",
    passport.authenticate("jwt", { session: false }),
    savePaymentMethod
  );
  router.put(
    "/payment-methods/:paymentMethodId",
    passport.authenticate("jwt", { session: false }),
    editMethod
  );
  router.get(
    "/payment-methods/:paymentMethodId",
    passport.authenticate("jwt", { session: false }),
    getPaymentMethod
  );
  router.delete(
    "/payment-methods/:paymentMethodId",
    passport.authenticate("jwt", { session: false }),
    deletePaymentMethod
  );
}
