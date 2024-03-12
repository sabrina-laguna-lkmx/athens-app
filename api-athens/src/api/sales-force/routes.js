import { sendSalesForce, sentRentContainer } from "./service.js";

export function registerRoutes(router) {
  router.post("/customer-services/sales-force", sendSalesForce);
  router.post("/customer-services/rent-container", sentRentContainer);
}
