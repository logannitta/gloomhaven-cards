import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export const spellweaverCards = {
  plus0Stun: {
    img: 'assets/cards/spellweaver/Plus0Stun.png',
    name: 'Plus 0 Stun',
    id: CardId.spellweaverPlus0Stun,
  },
  plus1Curse: {
    img: 'assets/cards/spellweaver/Plus1Curse.png',
    name: 'Plus 1 Curse',
    id: CardId.spellweaverPlus1Curse,
  },
  plus1Immobilize: {
    img: 'assets/cards/spellweaver/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.spellweaverPlus1Immobilize,
  },
  plus1Wound: {
    img: 'assets/cards/spellweaver/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.spellweaverPlus1Wound,
  },
  plus2Fire: {
    img: 'assets/cards/spellweaver/Plus2Fire.png',
    name: 'Plus 2 Fire',
    id: CardId.spellweaverPlus2Fire,
  },
  plus2Ice: {
    img: 'assets/cards/spellweaver/Plus2Ice.png',
    name: 'Plus 2 Ice',
    id: CardId.spellweaverPlus2Ice,
  },
  rollingAir: {
    img: 'assets/cards/spellweaver/RollingAir.png',
    name: 'Rolling Air',
    id: CardId.spellweaverRollingAir,
  },
  rollingDark: {
    img: 'assets/cards/spellweaver/RollingDark.png',
    name: 'Rolling Dark',
    id: CardId.spellweaverRollingDark,
  },
  rollingEarth: {
    img: 'assets/cards/spellweaver/RollingEarth.png',
    name: 'Rolling Earth',
    id: CardId.spellweaverRollingEarth,
  },
  rollingLight: {
    img: 'assets/cards/spellweaver/RollingLight.png',
    name: 'Rolling Light',
    id: CardId.spellweaverRollingLight,
  },
};

export const spellweaverActions = {
  'Add one (+0) [Stun] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus0Stun];
  },
  'Add two (+1) cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },
  'Add one (+1) [Wound] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus1Wound];
  },
  'Add one (+1) [Immobilize] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus1Immobilize];
  },
  'Add one (+1) [Curse] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus1Curse];
  },
  'Add one (+2) [Fire] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus2Fire];
  },
  'Add one (+2) [Ice] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus2Ice];
  },
  'Add one rolling [Earth] card and one rolling [Air] card': (deck: Card[]) => {
    return [
      ...deck,
      spellweaverCards.rollingEarth,
      spellweaverCards.rollingAir,
    ];
  },
  'Add one rolling [Light] card and one rolling [Dark] card': (
    deck: Card[]
  ) => {
    return [
      ...deck,
      spellweaverCards.rollingLight,
      spellweaverCards.rollingDark,
    ];
  },
};

export class Spellweaver implements Character {
  name = 'Spellweaver';
  health = 8;
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: spellweaverActions['Add two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: spellweaverActions['Add two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Stun] card',
      addAction: spellweaverActions['Add one (+0) [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: spellweaverActions['Add one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: spellweaverActions['Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Curse] card',
      addAction: spellweaverActions['Add one (+1) [Curse] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Fire] card',
      addAction: spellweaverActions['Add one (+2) [Fire] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Fire] card',
      addAction: spellweaverActions['Add one (+2) [Fire] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: spellweaverActions['Add one (+2) [Ice] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: spellweaverActions['Add one (+2) [Ice] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Earth] card and one rolling [Air] card',
      addAction:
        spellweaverActions[
          'Add one rolling [Earth] card and one rolling [Air] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Light] card and one rolling [Dark] card',
      addAction:
        spellweaverActions[
          'Add one rolling [Light] card and one rolling [Dark] card'
        ],
    },
  ];
}
