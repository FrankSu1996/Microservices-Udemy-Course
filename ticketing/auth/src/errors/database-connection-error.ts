export class DatabaseConnectionError extends Error {
  reason = "Error connecting to database";
  constructor() {
    super();

    // when trying to extend a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
