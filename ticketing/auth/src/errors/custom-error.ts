export abstract class CustomError extends Error {
  //abstract property means subclass must implement
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // when trying to extend a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
