import { mg } from "../../common/MailGunEmailService.js";

const domain = '';

export const EmailRunSerive = async (req, res) => {
  try {
    const msg = await mg.messages.create(domain, {
      from: "devangpatil2020@gmail.com",
      to: ["devangpatil2020@gmail.com", "devangpatil2024@gmail.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomeness!",
      html: "<h1>Testing some Mailgun awesomeness!</h1>"
    });
    console.log(msg);
    res.send(msg);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};