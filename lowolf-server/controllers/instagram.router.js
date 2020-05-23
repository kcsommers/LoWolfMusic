require('dotenv').config();
const router = require('express').Router(); const axios = require('axios');

const apiBaseUrl = 'https://graph.instagram.com';

router.get('/', (req, res) => {
  axios
    .get(`${apiBaseUrl}/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;