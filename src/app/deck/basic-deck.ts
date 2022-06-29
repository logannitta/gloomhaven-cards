export enum CardId {
  miss,
  plus0,
  plus1,
  plus2,
  minus1,
  minus2,
  times2,
  curse,
  bless,
  plagueheraldAirPlus1,
  plagueheraldRollingPoison,
  plagueheraldRollingCurse,
  plagueheraldRollingImmobilize,
  plagueheraldRollingStun,
  brutePlus3,
  bruteRollingPush1,
  bruteRollingPierce3,
  bruteRollingStun,
  bruteRollingDisarm,
  bruteRollingMuddle,
  bruteRollingAddTarget,
  brutePlus1Shield1Self,
}

export const basicCardIds = [
  CardId.miss,
  CardId.plus0,
  CardId.plus1,
  CardId.plus2,
  CardId.minus1,
  CardId.minus2,
  CardId.times2,
];

export interface Card {
  img: string;
  damage?: number;
  shuffle?: boolean;
  name?: string;
  id?: CardId;
}

export const basicCards = {
  miss: {
    img: 'assets/cards/Miss.png',
    damage: 0,
    shuffle: true,
    name: 'Miss',
    id: CardId.miss,
  },
  times2: {
    img: 'assets/cards/Times2.png',
    damage: 0,
    shuffle: true,
    name: 'Times2',
    id: CardId.times2,
  },
  minus1: {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
    id: CardId.minus1,
  },
  minus2: {
    img: 'assets/cards/Minus2.png',
    damage: -2,
    name: '-2',
    id: CardId.minus2,
  },
  plus0: {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
    id: CardId.plus0,
  },
  plus1: {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
    id: CardId.plus1,
  },
  plus2: {
    img: 'assets/cards/Plus2.png',
    damage: 2,
    name: '+2',
    id: CardId.plus2,
  },
  curse: {
    img: 'assets/cards/Curse.png',
    id: CardId.curse,
  },
  bless: {
    img: 'assets/cards/Bless.png',
    id: CardId.bless,
  },
};

export const basicDeck: Card[] = [
  basicCards.times2,
  basicCards.miss,
  // [...Array.from<Card>({ length: 5 }, (): Card => basicCards.minus1)],
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus2,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus2,
];
