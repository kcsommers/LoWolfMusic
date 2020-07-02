require('dotenv').config();
import e, { Request, Response } from 'express';
import cloudinary from 'cloudinary';

interface CloudinaryQuery {
  type: string;
  prefix: string;
  next_cursor?: string;
  max_results: number;
}

const router: e.Router = e.Router();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

router.get('/', (req: Request, res: Response) => {
  const query: CloudinaryQuery = {
    type: 'upload',
    prefix: 'Lo Wolf Music/photos-page',
    max_results: 500
  }
  cloudinary.v2.api.resources(query)
    .then(result => {
      res.status(200).json({ data: result });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
});

module.exports = router;
