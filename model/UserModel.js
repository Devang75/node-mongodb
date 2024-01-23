import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
});

export const UserDataRegis = mongoose.model('users', UserModel);
