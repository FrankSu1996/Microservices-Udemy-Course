import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();

    // when trying to extend a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    // map over each error, return them as properly formatted array of error objects
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
