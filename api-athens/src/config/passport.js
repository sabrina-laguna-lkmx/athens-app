import passport from "koa-passport";
import dotenv from "dotenv";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

dotenv.config();

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwt_payload, done) {
      done(null, jwt_payload);
    }
  )
);
