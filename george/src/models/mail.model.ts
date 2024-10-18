import mongoose from "mongoose";

const mail = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "The full name field is required"],
  },
  email: {
    type: String,
    required: [true, "The email field is required"],
  },
  tel: {
    type: String,
    required: [true, "The Telephone field is required"],
  },
  message: {
    type: String,
    required: [true, "The Message field is required"],
  },
});

export const Mail = mongoose.model("mails", mail);
