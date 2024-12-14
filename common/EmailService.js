import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  requireTLS: true,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const EmailService = async (option) => {
  const emailOptions = {
    from: 'devangpatil2020@gmail.com',
    to: option.Email,
    subject: option.Subject,
    text: option.Text,
  };

  await transporter.sendMail(emailOptions);
};