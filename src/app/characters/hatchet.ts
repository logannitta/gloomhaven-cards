import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const hatchetCards = {
  plus0Stun: {
    img: 'assets/cards/hatchet/Plus0Stun.png',
    name: 'Plus 0 Stun',
    id: CardId.hatchetPlus0Stun,
  },
  plus1Immobilize: {
    img: 'assets/cards/hatchet/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.hatchetPlus1Immobilize,
  },
  plus1Poison: {
    img: 'assets/cards/hatchet/Plus1Poison.png',
    name: 'Plus 1 Poison',
    id: CardId.hatchetPlus1Poison,
  },
  plus1Stun: {
    img: 'assets/cards/hatchet/Plus1Stun.png',
    name: 'Plus 1 Stun',
    id: CardId.hatchetPlus1Stun,
  },
  plus1Wound: {
    img: 'assets/cards/hatchet/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.hatchetPlus1Wound,
  },
  // plus1Push2: {
  //   img: 'assets/cards/hatchet/Plus1Push2.png',
  //   name: 'Plus 1 Push 2',
  //   id: CardId.hatchetPlus1Push2,
  // },
  plus2Air: {
    img: 'assets/cards/hatchet/Plus2Air.png',
    name: 'Plus 2 Air',
    id: CardId.hatchetPlus2Air,
  },
  plus2Muddle: {
    img: 'assets/cards/hatchet/Plus2Muddle.png',
    name: 'Plus 2 Muddle',
    id: CardId.hatchetPlus2Muddle,
  },
  plus3: {
    img: 'assets/cards/hatchet/Plus3.png',
    name: 'Plus 3',
    id: CardId.hatchetPlus3,
  },
};

export const hatchetActions = {
  'Replace one (+0) card with one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [hatchetCards.plus0Stun]);
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus0Stun, newDeck, [basicCards.plus0]);
    return newDeck;
  },
  'Replace one (+0) card with one (+2) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [hatchetCards.plus2Muddle]);
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+2) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus2Muddle, newDeck, [basicCards.plus0]);
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [hatchetCards.plus1Poison]);
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus1Poison, newDeck, [basicCards.plus0]);
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [hatchetCards.plus1Wound]);
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus1Wound, newDeck, [basicCards.plus0]);
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Immobilize] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [hatchetCards.plus1Immobilize]);
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Immobilize] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus1Immobilize, newDeck, [basicCards.plus0]);
    return newDeck;
  },
  'Replace one (+1) card with one (+1) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck, [hatchetCards.plus1Stun]);
    return newDeck;
  },
  'Undo Replace one (+1) card with one (+1) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus1Stun, newDeck, [basicCards.plus1]);
    return newDeck;
  },
  'Replace one (+1) with one (+3) card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck, [hatchetCards.plus3]);
    return newDeck;
  },
  'Undo Replace one (+1) with one (+3) card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus3, newDeck, [basicCards.plus1]);
    return newDeck;
  },
  'Add one (+2) Air card': (deck: Card[]) => {
    return [...deck, hatchetCards.plus2Air];
  },
  'Undo Add one (+2) Air card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.hatchetPlus2Air, newDeck);
    return newDeck;
  },
  // 'Replace one (+0) card with one (+1) [Push 2] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   removeCard(CardId.plus0, newDeck, [hatchetCards.plus1Push2]);
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+1) [Push 2] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   removeCard(CardId.hatchetPlus1Push2, newDeck, [basicCards.plus0]);
  //   return newDeck;
  // },
};

export class Hatchet implements Character {
  name = 'Hatchet';
  health = 12;
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
      removeAction: BasicPerkAction['Undo Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
      removeAction: BasicPerkAction['Undo Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Muddle] card',
      addAction:
        hatchetActions['Replace one (+0) card with one (+2) [Muddle] card'],
      removeAction:
        hatchetActions[
          'Undo Replace one (+0) card with one (+2) [Muddle] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Poison] card',
      addAction:
        hatchetActions['Replace one (+0) card with one (+1) [Poison] card'],
      removeAction:
        hatchetActions[
          'Undo Replace one (+0) card with one (+1) [Poison] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Wound] card',
      addAction:
        hatchetActions['Replace one (+0) card with one (+1) [Wound] card'],
      removeAction:
        hatchetActions['Undo Replace one (+0) card with one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Immobilize] card',
      addAction:
        hatchetActions['Replace one (+0) card with one (+1) [Immobilize] card'],
      removeAction:
        hatchetActions[
          'Undo Replace one (+0) card with one (+1) [Immobilize] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Push 2] card',
      // addAction:
      //   hatchetActions['Replace one (+0) card with one (+1) [Push 2] card'],
      // removeAction:
      //   hatchetActions[
      //     'Undo Replace one (+0) card with one (+1) [Push 2] card'
      //   ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+0) [Stun] card',
      addAction:
        hatchetActions['Replace one (+0) card with one (+0) [Stun] card'],
      removeAction:
        hatchetActions['Undo Replace one (+0) card with one (+0) [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+1) [Stun] card',
      addAction:
        hatchetActions['Replace one (+1) card with one (+1) [Stun] card'],
      removeAction:
        hatchetActions['Undo Replace one (+1) card with one (+1) [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) Air card',
      addAction: hatchetActions['Add one (+2) Air card'],
      removeAction: hatchetActions['Undo Add one (+2) Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) Air card',
      addAction: hatchetActions['Add one (+2) Air card'],
      removeAction: hatchetActions['Undo Add one (+2) Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) Air card',
      addAction: hatchetActions['Add one (+2) Air card'],
      removeAction: hatchetActions['Undo Add one (+2) Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) with one (+3) card',
      addAction: hatchetActions['Replace one (+1) with one (+3) card'],
      removeAction: hatchetActions['Undo Replace one (+1) with one (+3) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) with one (+3) card',
      addAction: hatchetActions['Replace one (+1) with one (+3) card'],
      removeAction: hatchetActions['Undo Replace one (+1) with one (+3) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) with one (+3) card',
      addAction: hatchetActions['Replace one (+1) with one (+3) card'],
      removeAction: hatchetActions['Undo Replace one (+1) with one (+3) card'],
    },
  ];
}
