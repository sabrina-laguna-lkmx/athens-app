import { activeAccount, login, register } from "./service.js";

export function registerRoutes(router) {
  router.post("/login", login);
  router.post("/register", register);
  router.get('/:email/activeAccount/:token', activeAccount);
}
