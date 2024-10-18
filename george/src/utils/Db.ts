import mongoose from "mongoose";

export const connectDb = async () => {
  const URI = process.env.DB_URI;
  await mongoose.connect(URI as string);
};
