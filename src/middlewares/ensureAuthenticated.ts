import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "e42b6a82864b7060c447ecebd62518a3") as {
      sub: string;
    };

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
