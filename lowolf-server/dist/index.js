"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 3000;
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/instagram', require('./controllers/instagram.router'));
app.use('/photos', require('./controllers/photos.router'));
app.use('/contact', require('./controllers/contact.router'));
app.get('/sitemap', (req, res) => {
    console.log('Hit sitemap');
    res.sendFile(path_1.default.join(__dirname, '../sitemap.xml'));
});
app.listen(port, () => console.log(`Hooked on ${port}`));
//# sourceMappingURL=index.js.map