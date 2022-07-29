import { basicCards, Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const doomstalkerCards = {
  plus0Stun: {
    img: 'assets/cards/doomstalker/Plus0Stun.png',
    name: 'Plus 0 Stun',
    id: CardId.doomstalkerPlus0Stun,
  },
  plus1Immobilize: {
    img: 'assets/cards/doomstalker/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.doomstalkerPlus1Immobilize,
  },
  plus1Poison: {
    img: 'assets/cards/doomstalker/Plus1Poison.png',
    name: 'Plus 1 Poison',
    id: CardId.doomstalkerPlus1Poison,
  },
  plus1Wound: {
    img: 'assets/cards/doomstalker/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.doomstalkerPlus1Wound,
  },
  plus2Muddle: {
    img: 'assets/cards/doomstalker/Plus2Muddle.png',
    name: 'Plus 2 Muddle',
    id: CardId.doomstalkerPlus2Muddle,
  },
  rollingAddTarget: {
    img: 'assets/cards/doomstalker/RollingAddTarget.png',
    name: 'Rolling Add Target',
    id: CardId.doomstalkerRollingAddTarget,
  },
  rollingPlus1: {
    img: 'assets/cards/doomstalker/RollingPlus1.png',
    name: 'Rolling Plus 1',
    id: CardId.doomstalkerRollingPlus1,
  },
};

export const doomstalkerActions = {
  'Add one (+0) [Stun] card': (deck: Card[]) => {
    return [...deck, doomstalkerCards.plus0Stun];
  },
  'Undo Add one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerPlus0Stun, newDeck);
    return newDeck;
  },
  'Add one rolling [Add Target] card': (deck: Card[]) => {
    return [...deck, doomstalkerCards.rollingAddTarget];
  },
  'Undo Add one rolling [Add Target] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerRollingAddTarget, newDeck);
    return newDeck;
  },
  'Add one (+1) [Immobilize] card': (deck: Card[]) => {
    return [...deck, doomstalkerCards.plus1Immobilize];
  },
  'Undo Add one (+1) [Immobilize] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerPlus1Immobilize, newDeck);
    return newDeck;
  },
  'Add one (+1) [Poison] card': (deck: Card[]) => {
    return [...deck, doomstalkerCards.plus1Poison];
  },
  'Undo Add one (+1) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerPlus1Poison, newDeck);
    return newDeck;
  },
  'Add one (+1) [Wound] card': (deck: Card[]) => {
    return [...deck, doomstalkerCards.plus1Wound];
  },
  'Undo Add one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerPlus1Wound, newDeck);
    return newDeck;
  },
  'Add one (+2) [Muddle] card': (deck: Card[]) => {
    return [...deck, doomstalkerCards.plus2Muddle];
  },
  'Undo Add one (+2) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerPlus2Muddle, newDeck);
    return newDeck;
  },
  'Add two rolling (+1) cards': (deck: Card[]) => {
    return [
      ...deck,
      doomstalkerCards.rollingPlus1,
      doomstalkerCards.rollingPlus1,
    ];
  },
  'Undo Add two rolling (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.doomstalkerRollingPlus1, newDeck);
    removeCard(CardId.doomstalkerRollingPlus1, newDeck);
    return newDeck;
  },
  'Replace two (+0) cards with two (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [basicCards.plus1]);
    removeCard(CardId.plus0, newDeck, [basicCards.plus1]);
    return newDeck;
  },
  'Undo Replace two (+0) cards with two (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck, [basicCards.plus0]);
    removeCard(CardId.plus1, newDeck, [basicCards.plus0]);
    return newDeck;
  },
};

export class Doomstalker implements Character {
  name = 'Doomstalker';
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
      text: 'Replace two (+0) cards with two (+1) cards',
      addAction:
        doomstalkerActions['Replace two (+0) cards with two (+1) cards'],
      removeAction:
        doomstalkerActions['Undo Replace two (+0) cards with two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with two (+1) cards',
      addAction:
        doomstalkerActions['Replace two (+0) cards with two (+1) cards'],
      removeAction:
        doomstalkerActions['Undo Replace two (+0) cards with two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with two (+1) cards',
      addAction:
        doomstalkerActions['Replace two (+0) cards with two (+1) cards'],
      removeAction:
        doomstalkerActions['Undo Replace two (+0) cards with two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: doomstalkerActions['Add two rolling (+1) cards'],
      removeAction: doomstalkerActions['Undo Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: doomstalkerActions['Add two rolling (+1) cards'],
      removeAction: doomstalkerActions['Undo Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Muddle] card',
      addAction: doomstalkerActions['Add one (+2) [Muddle] card'],
      removeAction: doomstalkerActions['Undo Add one (+2) [Muddle] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Poison] card',
      addAction: doomstalkerActions['Add one (+1) [Poison] card'],
      removeAction: doomstalkerActions['Undo Add one (+1) [Poison] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: doomstalkerActions['Add one (+1) [Wound] card'],
      removeAction: doomstalkerActions['Undo Add one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: doomstalkerActions['Add one (+1) [Immobilize] card'],
      removeAction: doomstalkerActions['Undo Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Stun] card',
      addAction: doomstalkerActions['Add one (+0) [Stun] card'],
      removeAction: doomstalkerActions['Undo Add one (+0) [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: doomstalkerActions['Add one rolling [Add Target] card'],
      removeAction:
        doomstalkerActions['Undo Add one rolling [Add Target] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: doomstalkerActions['Add one rolling [Add Target] card'],
      removeAction:
        doomstalkerActions['Undo Add one rolling [Add Target] card'],
    },
  ];
}
