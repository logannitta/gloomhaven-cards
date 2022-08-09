import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

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
  'Undo Add one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverPlus0Stun, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two (+1) cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },
  'Undo Add two (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck);
      removeCard(CardId.plus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Wound] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus1Wound];
  },
  'Undo Add one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverPlus1Wound, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Immobilize] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus1Immobilize];
  },
  'Undo Add one (+1) [Immobilize] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverPlus1Immobilize, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Curse] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus1Curse];
  },
  'Undo Add one (+1) [Curse] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverPlus1Curse, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+2) [Fire] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus2Fire];
  },
  'Undo Add one (+2) [Fire] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverPlus2Fire, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+2) [Ice] card': (deck: Card[]) => {
    return [...deck, spellweaverCards.plus2Ice];
  },
  'Undo Add one (+2) [Ice] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverPlus2Ice, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling [Earth] card and one rolling [Air] card': (deck: Card[]) => {
    return [
      ...deck,
      spellweaverCards.rollingEarth,
      spellweaverCards.rollingAir,
    ];
  },
  'Undo Add one rolling [Earth] card and one rolling [Air] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverRollingEarth, newDeck);
      removeCard(CardId.spellweaverRollingAir, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
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
  'Undo Add one rolling [Light] card and one rolling [Dark] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.spellweaverRollingLight, newDeck);
      removeCard(CardId.spellweaverRollingDark, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
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
      removeAction: BasicPerkAction['Undo Remove four +0 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: spellweaverActions['Add two (+1) cards'],
      removeAction: spellweaverActions['Undo Add two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: spellweaverActions['Add two (+1) cards'],
      removeAction: spellweaverActions['Undo Add two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Stun] card',
      addAction: spellweaverActions['Add one (+0) [Stun] card'],
      removeAction: spellweaverActions['Undo Add one (+0) [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: spellweaverActions['Add one (+1) [Wound] card'],
      removeAction: spellweaverActions['Undo Add one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: spellweaverActions['Add one (+1) [Immobilize] card'],
      removeAction: spellweaverActions['Undo Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Curse] card',
      addAction: spellweaverActions['Add one (+1) [Curse] card'],
      removeAction: spellweaverActions['Undo Add one (+1) [Curse] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Fire] card',
      addAction: spellweaverActions['Add one (+2) [Fire] card'],
      removeAction: spellweaverActions['Undo Add one (+2) [Fire] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Fire] card',
      addAction: spellweaverActions['Add one (+2) [Fire] card'],
      removeAction: spellweaverActions['Undo Add one (+2) [Fire] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: spellweaverActions['Add one (+2) [Ice] card'],
      removeAction: spellweaverActions['Undo Add one (+2) [Ice] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: spellweaverActions['Add one (+2) [Ice] card'],
      removeAction: spellweaverActions['Undo Add one (+2) [Ice] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Earth] card and one rolling [Air] card',
      addAction:
        spellweaverActions[
          'Add one rolling [Earth] card and one rolling [Air] card'
        ],
      removeAction:
        spellweaverActions[
          'Undo Add one rolling [Earth] card and one rolling [Air] card'
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
      removeAction:
        spellweaverActions[
          'Undo Add one rolling [Light] card and one rolling [Dark] card'
        ],
    },
  ];
}
