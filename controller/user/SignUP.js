import { HashPassword } from "../../common/HashPassword.js";
import { UserDataRegis } from "../../model/UserModel.js";

export const SignUP = async (req, res) => {
  const password = await HashPassword(req.body.password);
  const UserData = new UserDataRegis({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: password,
  });
  console.log(UserData);
  try {
    UserData.save();
    await res.status(201).json({success : true, message : UserData});
  } catch (error) {
    await res.status(400).json({ message: error.message });
  }
};
