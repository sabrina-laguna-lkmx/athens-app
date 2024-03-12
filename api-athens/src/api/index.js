import Router from "@koa/router";
import { registerRoutes as registerUserRoutes } from "./users/routes.js";
import { registerRoutes as registerSalesForceRoutes } from "./sales-force/routes.js";
import { registerRoutes as registerPaymentMethodsRoutes } from "./payment-methods/routes.js";
import { registerRoutes as registerBalancesRoutes } from "./balances/routes.js";
import { registerRoutes as registerBillsRoutes } from "./bills/routes.js";
import { registerRoutes as registerBulkyPickupRoutes } from "./bulky-pickup/routes.js";
import { registerRoutes as registerBillsPreferencesRoutes } from "./billing-preferences/routes.js";
import { registerRoutes as registerPaymentRoutes } from "./payment/routes.js";
import { registerRoutes as registerAccountsRoutes } from "./accounts/routes.js";

const router = new Router({
  prefix: "/api",
});

registerAllRoutes(router);

function registerAllRoutes(router) {
  registerUserRoutes(router);
  registerSalesForceRoutes(router);
  registerPaymentMethodsRoutes(router);
  registerBalancesRoutes(router);
  registerBillsRoutes(router);
  registerBulkyPickupRoutes(router);
  registerBillsPreferencesRoutes(router);
  registerPaymentRoutes(router);
  registerAccountsRoutes(router);
}

export { router };
