"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const router = express_1.default.Router();
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
router.get('/', (req, res) => {
    const query = {
        type: 'upload',
        prefix: 'Lo Wolf Music/photos-page',
        max_results: 500
    };
    cloudinary_1.default.v2.api.resources(query)
        .then(result => {
        res.status(200).json({ data: result });
    })
        .catch(err => {
        res.status(500).json({ error: err });
    });
});
module.exports = router;
//# sourceMappingURL=photos.router.js.map