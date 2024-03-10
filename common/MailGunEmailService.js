import formData from 'form-data';
import Mailgun from 'mailgun.js';
  
const mailgun = new Mailgun(formData);
const mailgunKey = 'b42bf9dc54487f164d4832288cd317cf-2c441066-f94e38f2';
export const mg = mailgun.client({username: 'api', key: mailgunKey});

