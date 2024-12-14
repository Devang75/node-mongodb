import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserImageSchema = new Schema({
    userImage: { type: Schema.Types.Mixed, required: true }
});

export const UserImagesData = model('UserImages', UserImageSchema);
