import { EmailService } from "../../common/EmailService.js";

export const ChangePassword = async (req, res) => {
    const Email = req.body.email;
    const Subject = req.body.subject;
    const Text = req.body.text;
  try {
    await EmailService({Email, Subject, Text}).catch((error) => {
        console.log(error);
       return res.status(500).json({message: error})
    })
   return await res.status(200).json("Email SuccessFully Sent")
  } catch (error) {
    throw res.status(500).json({message: error})
  }
};
