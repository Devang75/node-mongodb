import express from "express";
import { Validation } from "../../common/Validation.js";
import { body, param, query } from "express-validator";
import { SignUP } from "../../controller/user/SignUP.js";
import { GetAlluser } from "../../controller/user/GetAlluser.js";
import { GetFindById } from "../../controller/user/GetFindById.js";
import { UpdateUser } from "../../controller/user/UpdateUser.js";
import { Deleteuser } from "../../controller/user/Deleteuser.js";
import { uploadimage } from "../../controller/user/UploadImg.js";
import { ChangePassword } from "../../controller/user/ChangePassword.js";
import { EmailRunSerive } from "../../controller/user/UserEmail.js";

export const UserRoute = express.Router();

UserRoute.post(
  "/user/regis",
  body("firstname", "firstname is text")
    .notEmpty()
    .withMessage("firstname is required")
    .isString(),
  body("lastname", "lastname is text")
    .notEmpty()
    .withMessage("lastname is required")
    .isString(),
  body("username", "username is alphanumeric")
    .notEmpty()
    .withMessage("username is required")
    .isAlphanumeric(),
  body("email", "email is must x@gamil.com")
    .notEmpty()
    .withMessage("email is required")
    .isEmail(),
  body("password", "password is must strong")
    .notEmpty()
    .withMessage("password is required"),
  Validation,
  SignUP
);

UserRoute.get("/user/get", GetAlluser);

UserRoute.get(
  "/user/get/id",
  query("id", "id is numeric").notEmpty().withMessage("id is required"),
  Validation,
  GetFindById
);

UserRoute.patch(
  "/user/patch",
  query("id", "id will be numeric").notEmpty().withMessage("id is required"),
  Validation,
  UpdateUser
);

UserRoute.delete(
  "/user/delete/",
  query("id", "id will be numeric").notEmpty().withMessage("id is required"),
  Validation,
  Deleteuser
);

UserRoute.post('/user/upload',Validation,async (req,res) => {
  console.log(req.file);
})

UserRoute.post('/changepassword',Validation,ChangePassword)

UserRoute.get('/emailService', EmailRunSerive)