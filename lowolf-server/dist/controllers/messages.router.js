"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = require("express");
const mailgun_js_1 = __importDefault(require("mailgun-js"));
dotenv_1.default.config();
const mg = mailgun_js_1.default({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});
const router = express_1.Router();
router.post('/', (req, res) => {
    const { name, email, message, phone } = req.body;
    const emailData = {
        to: process.env.EMAIL_ADDRESS,
        from: `${name} <${email}>`,
        subject: `New Message from ${name}`,
        text: message
    };
    mg.messages().send(emailData, (err, body) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json({ error: null });
        // const replyData: Mailgun.messages.SendData = {
        //   to: email,
        //   from: `2K Homecare <${process.env.EMAIL_ADDRESS}>`,
        //   subject: 'Thank you!',
        //   text: 'Thanks for getting in touch! We will get back to you shortly.'
        // };
        // mg.messages().send(replyData);
    });
});
module.exports = router;
//# sourceMappingURL=messages.router.js.map