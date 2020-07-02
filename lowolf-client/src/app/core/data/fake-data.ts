import { ReviewModel } from '../model/reviews/reviews';
import { AlbumModel } from '../model/music/albums';
import { ShowModel } from '../model/shows/shows';

export const reviews: ReviewModel[] = [
  {
    author: 'Mountain Xpress',
    content: 'The ensemble’s smooth yet still plenty raw sound straddles the line between country and folk and serves as an excellent vehicle for Wolf’s achingly honest lyrics and rich imagery that come across crisp and clear under Zuskin’s studio guidance. The confident sound also belies Wolf’s intense emotions of feeling lost, confused, doubtful, scared and resistant that she experienced in the recording process, during which she doubled down on the notion that “just because something requires effort and time isn’t a reason to stop.',
    date: '07/1/20',
    link: 'https://mountainx.com/arts/lo-wolf-releases-debut-full-length-album/',
    imgUrl: 'https://mountainx.com/wp-content/uploads/2020/06/Lo-Wolf-1100x877.jpg',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'Mountain Xpress',
    content: 'Look over the track list for Lo Wolf’s debut full-length album, Singe, and you might do a double take. Alongside songs like “Alabama” and “Sailor” on the Asheville-based singer-songwriter’s July 1 release are “Nicotine Wet Dream,” “Sex” and “Rape City, USA” — and even lyrics in the songs without salty titles feature refreshingly unfiltered takes on sensitive subjects, occasionally startling imagery and enough profanity for a “Parental Advisory” sticker for explicit content. While some listeners may label Wolf as sensationalistic for taking this approach to songwriting, the source of her artistic style is far more organic. .... ',
    link: 'https://mountainx.com/arts/lo-wolf-releases-debut-full-length-album/',
    imgUrl: 'https://mountainx.com/wp-content/uploads/2020/06/Lo-Wolf-1100x877.jpg',
    date: '07/1/20',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'Heroin Chic',
    content: 'Lo brings to mind Gillian Welch with a sense of humor and irony, but no less sincere and heartbreaking...',
    date: '05/18/17',
    link: 'http://heroinchic.weebly.com/blog/interview-with-singer-songwriter-lo-wolf',
    imgUrl: 'http://heroinchic.weebly.com/uploads/7/0/6/9/70690257/published/unnamed_8.png?1495128143',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'Heroin Chic',
    content: 'Poetry, grit and wit are all effortlessly woven throughout a record that feels equal parts timeless and modern.',
    date: '05/18/17',
    link: 'http://heroinchic.weebly.com/blog/interview-with-singer-songwriter-lo-wolf',
    imgUrl: 'http://heroinchic.weebly.com/uploads/7/0/6/9/70690257/published/unnamed_8.png?1495128143',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'Drew Burgess',
    content: 'Alabama feels raw and real, because the song content speaks on human rights issues that Alabama has her boot heels on. Lo Wolf is an Asheville singer and songwriter, and advocate. This is how you make protest art pretty folks. \"Alabama sheets cotton starched and burnin\" white, my to do list was gettin\' done last night" is probably my favorite line.Speaking about love, presuming new experiences and love, is exciting and adds a real edge to the tune.In this era of backwards, fear- mongering policy - makers and their disciples, its dangerous to fall in line.We need songs like this to keep our individuality, our rights, and our spirits unbridled by the divisive far - leaning culture of recent years.And it\'s more than that, its a love song about the dangers of love in a very real sense. Upright bass, brushed drums, interweaving guitars, the prominent vocal, and a clever female harmony make up the song, Instrumentation is deliberate and simple in nature.It feels natural and fresh. Want to hear us talk about this song ? Check out episode #97 of our podcast at hlycrp.com.',
    link: 'https://hlycrp.com/',
    id: Math.floor(Math.random() * 100000).toString()
  },
  {
    author: 'Songs Worth Downloading',
    content: 'I am in awe of Lo Wolf. She is a fearless artist who puts it all out there and lives authentically to her art. She writes extremely honest songs that may sometimes make others uncomfortable. I don\'t believe she does this for shock value, though that may sometimes be an unintended consequence.I think her intended purpose is to expose important truths, which are never easy to swallow.Lo Wolf achieves this once again with her song "Room at the Table." The song starts with the foundation of her unrelenting acoustic guitar and strong vocal presence that she is so known for in her live shows and builds upon it with a whole- band approach.The result is a really pretty song about some of the more difficult aspects of love—overcoming our pasts so we can love another and asking for acceptance of who and where we are now so that we can be loved—something that is relatable and rings true for many of us I’m sure. ',
    id: Math.floor(Math.random() * 100000).toString()
  }
];

export const shows: ShowModel[] = [
  {
    date: '07/20/2020',
    venue: 'Lo Wolf Live Stream',
    id: Math.floor(Math.random() * 10000).toString(),
    city: 'Asheville, NC'
  },
  {
    date: '08/20/2020',
    venue: 'Lo Wolf Live Stream',
    id: Math.floor(Math.random() * 10000).toString(),
    city: 'Asheville, NC'
  },
  {
    date: '09/20/2020',
    venue: 'Lo Wolf Live Stream',
    id: Math.floor(Math.random() * 10000).toString(),
    city: 'Asheville, NC'
  },
  {
    date: '10/20/2020',
    venue: 'Lo Wolf Live Stream',
    id: Math.floor(Math.random() * 10000).toString(),
    city: 'Asheville, NC'
  }
];

export const albums: AlbumModel[] = [
  {
    title: 'Singe',
    year: '2020',
    coverUrl: 'assets/images/singe-cover.jpg',
    id: '1',
    tracklist: [
      '01. Alabama',
      '02. Nicotine Wet Dream',
      '03. Room at the Table',
      '04. Singe',
      '05. Sex',
      '06. Sailor',
      '07. Rape City, USA',
      '08. Pay Me',
      '09. Tryin'
    ]
  },
  {
    title: 'Country Pop Hit EP',
    year: '2018',
    coverUrl: 'assets/images/country-pop-hit-cover.png',
    id: '2',
    tracklist: [
      '01. Kill No More',
      '02. Plug in the Iron',
      '03. Dog 1',
      '04. Gone are the Days'
    ]
  }
];
