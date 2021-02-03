import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // when trying to extend a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
