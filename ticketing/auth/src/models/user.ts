// defines a mongoose user model
import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a user model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

// define user schema
const userSchema = new mongoose.Schema({
  email: {
    // NOT typescript type
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// add build function to userSchema so we can typecheck User attributes
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
