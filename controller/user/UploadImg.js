import { UserImagesData } from '../../model/UserImage.js'

export const uploadimage = async (req, res) => {
    console.log("req",req.file);
    // const imageData = new FileReader();
    // imageData.readAsDataURL(req.body.userImage);
    // imageData.onload = async () => {
    //     await imageData.result()
    // }
    // const UserData = new UserImagesData({
    //     userImage: req.file
    // });
    // console.log(UserData);
    try {
    //   await UserData.save();
    //   return res.status(201).json({success : true, message : UserData});
    } catch (error) {
      await res.status(400).json({ message: error.message });
    }
  };