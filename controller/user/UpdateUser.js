import { UserDataRegis } from "../../model/UserModel.js"

export const UpdateUser = async (req,res) => {
    UserDataRegis.findByIdAndUpdate(req.query.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({success : true, message : "successfully updated", data : user});
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}