export interface IAlbum {
  title: string;
  year: string;
  coverUrl: string;
  id: string;
  tracklist: string[];
}


export const albums: IAlbum[] = [
  {
    title: 'Singe',
    year: '2020',
    coverUrl: 'assets/images/singe-cover.jpg',
    id: '1',
    tracklist: [
      'Alabama',
      'Nicotine Wet Dream',
      'Room at the Table',
      'Singe',
      'Sex',
      'Sailor',
      'Rape City, USA',
      'Pay Me',
      'Tryin'
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
