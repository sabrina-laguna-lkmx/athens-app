import passport from "koa-passport";
import { makePayment } from "./service.js";

export function registerRoutes(router) {
  router.post(
    "/payments",
    passport.authenticate("jwt", { session: false }),
    makePayment
  );
}
