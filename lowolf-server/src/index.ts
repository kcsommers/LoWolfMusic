require('dotenv').config();
import express from 'express';
const port = process.env.PORT || 3000;
import cors from 'cors';
const app = express();
import bp from 'body-parser';

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/instagram', require('./controllers/instagram.router'));
app.use('/photos', require('./controllers/photos.router'));
app.use('/contact', require('./controllers/contact.router'));

app.listen(port, () => console.log(`Hooked on ${port}`));