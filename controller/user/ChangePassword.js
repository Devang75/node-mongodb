import { EmailService } from "../../common/EmailService.js";

export const ChangePassword = async (req, res) => {
    const { email: Email, subject: Subject, text: Text } = req.body;
    try {
        await EmailService({ Email, Subject, Text });
        return res.status(200).json("Email Successfully Sent");
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};
