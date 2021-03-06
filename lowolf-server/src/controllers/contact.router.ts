import dotenv from 'dotenv';
import { Request, Response, Router } from 'express';
import Mailgun from 'mailgun-js';

dotenv.config();
const mg = Mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const emailData: Mailgun.messages.SendData = {
    to: process.env.EMAIL_ADDRESS,
    from: `${name} <${email}>`,
    subject: `New Message from ${name}`,
    text: message
  };
  mg.messages().send(emailData, (err: Mailgun.Error, body: Mailgun.messages.SendResponse) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ error: null });
    const replyData: Mailgun.messages.SendData = {
      to: email,
      from: `Lo Wolf <${process.env.EMAIL_ADDRESS}>`,
      subject: 'Thank you!',
      text: 'Thanks for getting in touch! We will get back to you shortly.'
    };
    mg.messages().send(replyData);
  })
});

router.post('/signup', (req: Request, res: Response) => {
  const { name, email } = req.body;
  const emailData: Mailgun.messages.SendData = {
    to: process.env.EMAIL_ADDRESS,
    from: `${name} <${email}>`,
    subject: `Lo Wolf Music signup request`,
    text: `${name} would like to join your mailing list. Their email address is ${email}`
  };
  mg.messages().send(emailData, (err: Mailgun.Error, body: Mailgun.messages.SendResponse) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ error: null });
    const replyData: Mailgun.messages.SendData = {
      to: email,
      from: `Lo Wolf <${process.env.EMAIL_ADDRESS}>`,
      subject: 'Thank you!',
      text: 'Thanks for signing up!'
    };
    mg.messages().send(replyData);
  })
});

module.exports = router;