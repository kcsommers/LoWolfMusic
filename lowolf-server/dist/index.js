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
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/instagram', require('./controllers/instagram.router'));
app.listen(port, () => console.log(`Hooked on ${port}`));
//# sourceMappingURL=index.js.map