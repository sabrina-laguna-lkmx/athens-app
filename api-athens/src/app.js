import "dotenv/config";

import cors from "@koa/cors";
import Koa from "koa";
import { koaBody } from "koa-body";
import json from "koa-json";
import logger from "koa-logger";
import passport from "koa-passport";
import { router as apiRouter } from "./api/index.js";
import { router as authRouter } from "./auth/index.js";

import "./config/passport.js";
import "./config/email-configuration.js";

const app = new Koa();

app
  .use(logger())
  .use(koaBody())
  .use(
    cors({
      origin: "*",
    })
  )
  .use(json())
  .use(passport.initialize())
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())
  .use(authRouter.routes())
  .use(authRouter.allowedMethods());

app.listen(3001);
