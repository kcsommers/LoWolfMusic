require('dotenv').config();
import axios from 'axios';
import e, { Request, Response } from 'express';

const router: e.Router = e.Router();

const apiBaseUrl = 'https://graph.instagram.com';

router.get('/', (req: Request, res: Response): void => {
  axios
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