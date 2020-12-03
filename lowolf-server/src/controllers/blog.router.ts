require('dotenv').config();
import e, { Request, Response } from 'express';
import { loadRules } from 'tslint';

interface BlogPost {
  title: string;
  date: number;
  snippet: string;
  content: string;
  image: string;
  commentCount: number;
  _id: string;
}

const router: e.Router = e.Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json([
    {
      title: 'Blog Post 1',
      date: Date.now(),
      snippet: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vitae, aut ipsa minima dicta impedit libero amet est, natus consequatur hic incidunt inventore nostrum. Animi tempora illo ut cupiditate laborum',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vitae, aut ipsa minima dicta impedit libero amet est, natus consequatur hic incidunt inventore nostrum. Animi tempora illo ut cupiditate laborum',
      image: '',
      commentCount: 10,
      _id: 'asdfsadfasdf'
    },
    {
      title: 'Blog Post 2',
      date: Date.now(),
      snippet: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vitae, aut ipsa minima dicta impedit libero amet est, natus consequatur hic incidunt inventore nostrum. Animi tempora illo ut cupiditate laborum',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vitae, aut ipsa minima dicta impedit libero amet est, natus consequatur hic incidunt inventore nostrum. Animi tempora illo ut cupiditate laborum',
      image: '',
      commentCount: 10,
      _id: 'asdfsadfasdf'
    }
  ]);
});

module.exports = router;
