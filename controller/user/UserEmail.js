import { mg } from "../../common/MailGunEmailService.js";
const domain = ''

export const EmailRunSerive = async (req, res) => {
    try {
        await mg.messages.create(domain, {
            from: "devangpatil2020@gmail.com",
            to: ["devangpatil2020@gmail.com","devangpatil2024@gmail.com"],
            subject: "Hello",
            text: "Testing some Mailgun awesomeness!",
            html: "<h1>Testing some Mailgun awesomeness!</h1>"
        })
        .then(async msg => {
            console.log(msg)
           await res.send(msg)
        }) // logs response data
        .catch(err => console.log(err)); // logs any error      await res.status(201).json({success : true, message : UserData});
    } catch (error) {
      await res.status(400).json({ message: error.message });
    }
  };