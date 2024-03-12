import { sendBulkyPickup } from "./service.js";

export function registerRoutes(router) {
  router.post("/customer-services#", sendBulkyPickup);
}
