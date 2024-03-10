import formData from 'form-data';
import Mailgun from 'mailgun.js';
  
const mailgun = new Mailgun(formData);
const mailgunKey = '';
export const mg = mailgun.client({username: 'api', key: mailgunKey});

