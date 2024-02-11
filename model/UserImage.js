import mongoose from "mongoose";

const UserImageModal = new mongoose.Schema({
    userImage : Object
});

export const UserImagesData = mongoose.model('userImages', UserImageModal);
