import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgunKey = process.env.MAILGUN_API_KEY || '';
export const mg = new Mailgun(formData).client({username: 'api', key: mailgunKey});
