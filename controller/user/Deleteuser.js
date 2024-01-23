import { UserDataRegis } from "../../model/UserModel.js"

export const Deleteuser = (req,res) => 
{
    UserDataRegis.findByIdAndRemove(req.query.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ success : true,  message: 'User deleted successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}