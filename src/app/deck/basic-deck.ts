export interface Card {
  img: string;
  damage: number;
  shuffle?: boolean;
  status?: boolean;
  name?: string;
}

export const basicDeck: Card[] = [
  {
    img: 'assets/cards/Times2.png',
    damage: 0,
    shuffle: true,
    name: 'Times2',
  },
  {
    img: 'assets/cards/Miss.png',
    damage: 0,
    shuffle: true,
    name: 'Miss',
  },
  {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
  },
  {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
  },
  {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
  },
  {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
  },
  {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
  },
  {
    img: 'assets/cards/Minus2.png',
    damage: -2,
    name: '-2',
  },

  {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
  },
  {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
  },
  {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
  },
  {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
  },
  {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
  },
  {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
  },
  {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
  },
  {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
  },
  {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
  },
  {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
  },
  {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
  },
  {
    img: 'assets/cards/Plus2.png',
    damage: 2,
    name: '+2',
  },
];
