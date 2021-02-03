import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // check what error comes in
  if (err instanceof RequestValidationError) {
    // map over each error, return them as properly formatted array of error objects
    const formattedErrors = err.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
    // response 400 = user sent bad request data
    return res.status(400).send({ errors: formattedErrors });
  }
  if (err instanceof DatabaseConnectionError) {
    // response 500 = internal server error
    return res.status(500).send({
      errors: [
        {
          message: err.reason,
        },
      ],
    });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
