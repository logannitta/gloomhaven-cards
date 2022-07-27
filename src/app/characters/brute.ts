import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const bruteCards = {
  plus3: {
    img: 'assets/cards/brute/Plus3.png',
    damage: 3,
    name: 'Plus 3',
    id: CardId.brutePlus3,
  },
  rollingPush1: {
    img: 'assets/cards/brute/RollingPush1.png',
    name: 'Rolling Push 1',
    id: CardId.bruteRollingPush1,
  },
  rollingPierce3: {
    img: 'assets/cards/brute/RollingPierce3.png',
    name: 'Rolling Pierce 3',
    id: CardId.bruteRollingPierce3,
  },
  rollingStun: {
    img: 'assets/cards/brute/RollingStun.png',
    name: 'Rolling Stun',
    id: CardId.bruteRollingStun,
  },
  rollingDisarm: {
    img: 'assets/cards/brute/RollingDisarm.png',
    name: 'Rolling Disarm',
    id: CardId.bruteRollingDisarm,
  },
  rollingMuddle: {
    img: 'assets/cards/brute/RollingMuddle.png',
    name: 'Rolling Muddle',
    id: CardId.bruteRollingMuddle,
  },
  rollingAddTarget: {
    img: 'assets/cards/brute/RollingAddTarget.png',
    name: 'Rolling Add Target',
    id: CardId.bruteRollingAddTarget,
  },
  plus1Shield1Self: {
    img: 'assets/cards/brute/Plus1Shield1Self.png',
    name: 'Plus 1 Shield 1 Self',
    id: CardId.brutePlus1Shield1Self,
  },
};

export const bruteActions = {
  'Add one +3 card': (deck: Card[]) => {
    return [...deck, bruteCards.plus3];
  },
  'Undo Add one +3 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.brutePlus3, newDeck);
    return newDeck;
  },
  'Add three rolling Push 1': (deck: Card[]) => {
    return [
      ...deck,
      bruteCards.rollingPush1,
      bruteCards.rollingPush1,
      bruteCards.rollingPush1,
    ];
  },
  'Undo Add three rolling Push 1': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.bruteRollingPush1, newDeck);
    removeCard(CardId.bruteRollingPush1, newDeck);
    removeCard(CardId.bruteRollingPush1, newDeck);
    return newDeck;
  },
  'Add two rolling Pierce 3': (deck: Card[]) => {
    return [...deck, bruteCards.rollingPierce3, bruteCards.rollingPierce3];
  },
  'Undo Add two rolling Pierce 3': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.bruteRollingPierce3, newDeck);
    removeCard(CardId.bruteRollingPierce3, newDeck);
    return newDeck;
  },
  'Add rolling Stun': (deck: Card[]) => {
    return [...deck, bruteCards.rollingStun];
  },
  'Undo Add rolling Stun': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.bruteRollingStun, newDeck);
    return newDeck;
  },
  'Add rolling Disarm and rolling Muddle': (deck: Card[]) => {
    return [...deck, bruteCards.rollingDisarm, bruteCards.rollingMuddle];
  },
  'Undo Add rolling Disarm and rolling Muddle': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.bruteRollingDisarm, newDeck);
    removeCard(CardId.bruteRollingMuddle, newDeck);
    return newDeck;
  },
  'Add one rolling Add Target': (deck: Card[]) => {
    return [...deck, bruteCards.rollingAddTarget];
  },
  'Undo Add one rolling Add Target': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.bruteRollingAddTarget, newDeck);
    return newDeck;
  },
  'Add one Plus 1 Shield 1 Self': (deck: Card[]) => {
    return [...deck, bruteCards.plus1Shield1Self];
  },
  'Undo Add one Plus 1 Shield 1 Self': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.brutePlus1Shield1Self, newDeck);
    return newDeck;
  },
};

export class Brute implements Character {
  name = 'Brute';
  health = 8;
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
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: BasicPerkAction['Add two +1 cards'],
      removeAction: BasicPerkAction['Undo Add two +1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: BasicPerkAction['Add two +1 cards'],
      removeAction: BasicPerkAction['Undo Add two +1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+3) card',
      addAction: bruteActions['Add one +3 card'],
      removeAction: bruteActions['Undo Add one +3 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Push 1] cards',
      addAction: bruteActions['Add three rolling Push 1'],
      removeAction: bruteActions['Undo Add three rolling Push 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Push 1] cards',
      addAction: bruteActions['Add three rolling Push 1'],
      removeAction: bruteActions['Undo Add three rolling Push 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
      addAction: bruteActions['Add two rolling Pierce 3'],
      removeAction: bruteActions['Undo Add two rolling Pierce 3'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: bruteActions['Add rolling Stun'],
      removeAction: bruteActions['Undo Add rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: bruteActions['Add rolling Stun'],
      removeAction: bruteActions['Undo Add rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
      addAction: bruteActions['Add rolling Disarm and rolling Muddle'],
      removeAction: bruteActions['Undo Add rolling Disarm and rolling Muddle'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: bruteActions['Add one rolling Add Target'],
      removeAction: bruteActions['Undo Add one rolling Add Target'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: bruteActions['Add one rolling Add Target'],
      removeAction: bruteActions['Undo Add one rolling Add Target'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1, Self] card',
      addAction: bruteActions['Add one Plus 1 Shield 1 Self'],
      removeAction: bruteActions['Undo Add one Plus 1 Shield 1 Self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add one (+1) card',
      addAction:
        BasicPerkAction['Ignore negative item effects and add one (+1) card'],
      removeAction:
        BasicPerkAction[
          'Undo Ignore negative item effects and add one (+1) card'
        ],
    },
  ];
}
