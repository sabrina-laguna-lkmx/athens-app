import Router from "@koa/router";
import { registerRoutes as registerLoginRoutes } from "./login/routes.js";

const router = new Router({
  prefix: "/auth",
});

registerAllRoutes(router);

function registerAllRoutes(router) {
  registerLoginRoutes(router);
}

export { router };
