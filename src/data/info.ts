export interface Album {
  id: number;
  name: string;
  image: string;
  year: number;
  playlist?: Array<string>;
  youtubeUrl?: string;
}

export const pinkFloydAlbunsArray: Array<Album> = [
  {
    id: 1,
    name: 'The Piper at the Gates of Dawn',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/3c/PinkFloyd-album-piperatthegatesofdawn_300.jpg',
    year: 1967,
    playlist: [
      'Astronomy Domine',
      'Lucifer Sam',
      'Matilda Mother',
      'Flaming',
      'Pow R. Toc H. (Nick Mason, Wright, Roger Waters, Barrett)',
      'Take Up Thy Stethoscope and Walk (Waters)',
      'Interstellar Overdrive (Barrett, Mason, Waters, Wright)',
      'The Gnome',
      'Chapter 24',
      'The Scarecrow',
      'Bike',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=uRG9CttHW68&list=PLpI6XGqHb_GQIHfInrgA5MWAufzWw5H9z',
  },
  {
    id: 2,
    name: 'A Saucerful of Secrets',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/0/03/Pink_Floyd_-_A_Saucerful_of_Secrets.jpg',
    year: 1968,
    playlist: [
      'Let There Be More Light',
      'Remember a Day',
      'Set the Controls for the Heart of the Sun',
      'Corporal Clegg',
      'A Saucerful of Secrets',
      'See-Saw',
      'Jugband Blues',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=fcFrivOpCwc&list=PLn_HrLivU4eraqCFUNlxVj_V2BmVXiLBe',
  },
  {
    id: 3,
    name: 'More',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/7/70/More_-_Pink_Floyd_-_1969.jpg/220px-More_-_Pink_Floyd_-_1969.jpg',
    year: 1969,
    playlist: [
      'Cirrus Minor',
      'The Nile',
      'Crying Song',
      'Up the',
      'Green Is The Colour',
      'Cymbaline"',
      'Party Sequence',
      'Main Theme',
      'Ibiza Bar',
      'More Blues',
      'Quicksilver"',
      'A Spanish',
      'Dramatic Theme',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=GfPVM5dFlp8&list=PLfimnwaZdumi4h5H4u9UTGqkDbmYPrhuD',
  },
  {
    id: 4,
    name: 'Ummagumma',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/1/15/Pink_Floyd_-_Ummagumma.jpg/220px-Pink_Floyd_-_Ummagumma.jpg',
    year: 1969,
    playlist: [
      'Astronomy Domine',
      'Careful with That Axe, Eug',
      'Set the Controls for the Heart of the Sun',
      'A Saucerful of Secrets',
      'Sysyphus Part I',
      'Sysyphus Part II',
      'Sysyphus Part III',
      'Sysyphus Part IV',
      'Grantchester Meadows',
      'Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict',
      'The Narrow Way Part I',
      'The Narrow Way Part II',
      'The Narrow Way Part III',
      "The Grand Vizier's Garden Party Part I",
      "The Grand Vizier's Garden Party Part II",
      "The Grand Vizier's Garden Party Part III",
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=QawLRFL0Js0&list=PL6ogdCG3tAWhcv701QjwZWt3iXQxjKK3Y',
  },
  {
    id: 5,
    name: 'Atom Heart Mother',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/d/d1/Pink_Floyd_-_Atom_Heart_Mother.jpg',
    year: 1970,
    playlist: [
      'Atom Heart Mother',
      'If',
      'Summer 68',
      'Fat Old Sun',
      "Alan's Psychedelic Breakfast",
      'Remergence',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=wkLEu4Ko6Vg&list=PL64J65wgDdneRUw3eRfXs0I-5Ykx3nXbr&index=6',
  },
  {
    id: 6,
    name: 'Meddle',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/0/0e/Pink_Floyd_-_Meddle.jpg',
    year: 1971,
    playlist: [
      'One of These Days',
      'A Pillow of Winds',
      'Fearless',
      'San Tropez',
      'Seamus',
      'Echoes',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=48PJGVf4xqk&list=PL5aWbCMRfsdj_qmErmIrVjHYKNtxZz0Rv',
  },
  {
    id: 7,
    name: 'Obscured by Clouds',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/3/37/Pink_Floyd_-_1972_-_Obscured_by_Clouds.jpg/220px-Pink_Floyd_-_1972_-_Obscured_by_Clouds.jpg',
    year: 1972,
    playlist: [
      'Obscured by Clouds',
      "When You're In",
      'Burning Bridges',
      "The Gold It's in the...",
      "Wot's... Uh The Deal",
      'Mudmen',
      "Childhood's End",
      'Free Four',
      'Stay',
      'Absolutely Curtains',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=16V-wNwlTw0&list=PLfimnwaZdumgNU2Y_8SpLJHg0-xmHWWtX',
  },
  {
    id: 8,
    name: 'Dark Side of The Moon',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
    year: 1973,
    playlist: [
      'Speak to Me',
      'Breathe',
      'On the Run',
      'Time',
      'The Great Gig in the Sky',
      'Money',
      'Us and Them',
      'Any Colour You Like',
      'Brain Damage',
      'Eclipse',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=HW-lXjOyUWo&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy',
  },
  {
    id: 9,
    name: 'Wish You Were Here',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/b7/Wish_You_Were_Here.jpg',
    year: 1975,
    playlist: [
      'Shine On You Crazy Diamond Part I',
      'Shine On You Crazy Diamond Part II',
      'Welcome to The Machine',
      'Have a Cigar',
      'Wish You Were Here',
      'Shine On You Crazy Diamond Part III',
      'Shine On You Crazy Diamond Part IV',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=YLIy2t-KAc0&list=PLfimnwaZdumgdg-BPofqK8h6cdkxIxe2H',
  },
  {
    id: 10,
    name: 'Animals',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4a/Pink_Floyd_-_Animals.jpg/220px-Pink_Floyd_-_Animals.jpg',
    year: 1977,
    playlist: [
      'Pigs on the Wing (Part I)',
      'Dogs',
      'Pigs (Three Different Ones)',
      'Sheep',
      'Pigs on the Wing (Part II)',
      'Pigs on the Wing (Pari I & II Live)',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=WHGNPD1v1IQ&list=PLHpyBk0pZi2TZm0vIVC8AuSgCNumRwaea',
  },
  {
    id: 11,
    name: 'The Wall',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81QzRZ4UoNL._AC_SX466_.jpg',
    year: 1979,
    playlist: [
      'In the Flesh?',
      'The Thin Ice',
      'Another Brick in the Wall (Part I)',
      'The Happiest Days of Our Lives',
      'Another Brick in the Wall (Part II)',
      'Mother',
      'Goodbye Blue Sky',
      'Empty Spaces',
      'Young Lust',
      'One of My Turns',
      "Don't Leave Me Now",
      'Another Brick in the Wall (Part III)',
      'Goodbye Cruel World',
      'Hey You',
      'Is There Anybody Out There?',
      'Nobody Home',
      'Vera',
      'Bring the Boys Back Home',
      'Comfortably Numb',
      'The Show Must Go On',
      'In the Flesh',
      'Run Like Hell',
      'Waiting for the Worms',
      'Stop',
      'The Trial',
      'Outside the Wall',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=iLFwTqdsuxw&list=PLyDzU3p8FP24syYfTXpGqTDHsQhlxwllS',
  },
  {
    id: 12,
    name: 'The Final Cut',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/f/f7/Pink_Floyd_-_The_Final_Cut.jpg',
    year: 1983,
    playlist: [
      'The Post War Dream',
      'Your Possible Pasts',
      'One of the Few',
      'When The Tigers Broke Free',
      "The Hero's Return",
      "The Gunner's Dream",
      'Paranoid Eyes',
      'Get Your Filthy Hands Off My Desert',
      'The Fletcher Memorial Home',
      'Southampton Dock',
      'The Final Cut',
      'Not Now John',
      'Two Suns in the Sunset',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=Rp5_Ul-qG0w&list=PL0773596DEC67A0AF',
  },
  {
    id: 13,
    name: 'A Momentary Lapse of Reason',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/3/3c/Pink_Floyd_-_A_Momentary_Lapse_of_Reason.jpg',
    year: 1987,
    playlist: [
      'Signs of Life',
      'Learning to Fly',
      'The Dogs of War',
      'One Slip',
      'On the Turning Away',
      'Yet Another Movie',
      'Round and Around',
      'A New Machine (Part 1)',
      'Terminal Frost',
      'A New Machine (Part 2)',
      'Sorrow',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=hZ8QtwH7r80&list=PLpI6XGqHb_GQVh6mJKnmm3XXgj_06nJ9G',
  },
  {
    id: 14,
    name: 'Division Bell',
    image:
      'https://upload.wikimedia.org/wikipedia/en/6/6e/Pink_Floyd_-_Division_Bell.jpg',
    year: 1994,
    playlist: [
      'Cluster One',
      'What Do You Want from Me',
      'Poles Apart',
      'Marooned',
      'A Great Day for Freedom',
      'Wearing the Inside Out',
      'Take It Back',
      'Coming Back to Life',
      'Keep Talking',
      'Lost for Words',
      'High Hopes',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=4HLaOmiwV5Q&list=PLsVoIP7pW8g984pIJuKXhY9tTG1DiJWY9',
  },
  {
    id: 15,
    name: 'The Endless River',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/0/04/The_Endless_River_-_Pink_Floyd_-_2014.jpg',
    year: 2014,
    playlist: [
      'Things Left Unsaid',
      "It's What We Do",
      'Ebb and Flow',
      'Sum',
      'Skins',
      'Unsung',
      'Anisina',
      'The Lost Art of Conversation',
      'On Noodle Street',
      'Night Light',
      'Allons-y (1)',
      "Autumn '68",
      'Allons-y (2)',
      "Talkin' Hawkin",
      'Calling',
      'Eyes to Pearls',
      'Surfacing',
      'Louder than Words',
    ],
    youtubeUrl:
      'https://www.youtube.com/watch?v=0dw8aFj5cwQ&list=PLrXl1WrYvNbhAQqwvKPjwVBHEWl4y3QPo',
  },
  {
    id: 16,
    name: 'Delicate Sound of Thunder',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/c/c4/Pink_Floyd_-_Delicate_Sound_of_Thunder.jpg',
    year: 1988,
  },
  {
    id: 17,
    name: 'Pulse',
    image:
      'https://i.pinimg.com/originals/89/28/e3/8928e372651fc60256360ba5e21a7d2f.jpg',
    year: 1995,
  },
  {
    id: 18,
    name: 'Is There Abybody out There',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/e/e9/Pink_Floyd_-_Is_There_Anybody_Out_There%3F_The_Wall_Live_1980-81.jpg',
    year: 2000,
  },
];
