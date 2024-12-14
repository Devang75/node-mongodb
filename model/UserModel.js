import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserDataRegis = model('User', UserSchema);
