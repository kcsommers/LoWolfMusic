import { ReviewModel, ShowModel } from '@lo/core';

export const reviews: ReviewModel[] = [
  {
    author: 'Mountain Xpress',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '03/27/2017',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'New York Times',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    link: 'https://google.com'
  },
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com'
  },
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com'
  },
  {
    date: '02/25/2020',
    venue: 'The Bywater',
    id: Math.floor(Math.random() * 10000).toString(),
    link: 'https://google.com'
  }
]
