import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

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
