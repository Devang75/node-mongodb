import { UserDataRegis } from "../../model/UserModel.js";

export const GetAlluser = async (req, res) => {
  try {
    const users = await UserDataRegis.find();
    res.status(200).send({ success: true, message: "Get All Data", data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};