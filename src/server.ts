import mongoose from "mongoose";
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/versity");
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
}
