import { ReviewModel } from '../model/reviews/reviews';
import { AlbumModel } from '../model/music/albums';
import { ShowModel } from '../model/shows/shows';

export const reviews: ReviewModel[] = [
  {
    author: 'Mountain Xpress',
    content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '03/27/2017',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'New York Times',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    date: '03/27/2017',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'National Geographic',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '03/27/2017',
    id: Math.floor(Math.random() * 100000).toString()
  }
];

export const shows: ShowModel[] = [
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com',
    city: 'Asheville, NC'
  },
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com',
    city: 'Asheville, NC'
  },
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com',
    city: 'Asheville, NC'
  },
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com',
    city: 'Asheville, NC'
  }
];

export const albums: AlbumModel[] = [
  {
    title: 'Singe',
    year: '2020',
    coverUrl: 'assets/images/singe-cover.jpeg',
    id: '1',
    tracklist: [
      'Kill No More',
      'Plug in the Iron',
      'Dog 1',
      'Gone are the Days'
    ]
  },
  {
    title: 'Country Pop Hit EP',
    year: '2018',
    coverUrl: 'assets/images/country-pop-hit-cover.png',
    id: '2',
    tracklist: [
      'Kill No More',
      'Plug in the Iron',
      'Dog 1',
      'Gone are the Days'
    ]
  }
];
