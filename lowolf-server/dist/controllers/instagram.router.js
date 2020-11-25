"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const apiBaseUrl = 'https://graph.instagram.com';
router.get('/', (req, res) => {
    axios_1.default
        .get(`${apiBaseUrl}/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`)
        .then(response => {
        res.status(200).json(response.data);
    })
        .catch(err => {
        res.status(500).json(err);
    });
    // axios
    //   .get(`${apiBaseUrl}/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`)
    //   .then(response => {
    //     res.status(200).json(response.data);
    //   })
    //   .catch(err => {
    //     res.status(500).json(err);
    //   });
});
module.exports = router;
//# sourceMappingURL=instagram.router.js.map