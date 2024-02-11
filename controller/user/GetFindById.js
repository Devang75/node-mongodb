import { UserDataRegis } from "../../model/UserModel.js";

export const GetFindById = async (req,res) => {
  console.log(req.query.id);
    UserDataRegis.findById(req.query.id)
    .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).send({success : true, message : 'get data', data : user});
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
}