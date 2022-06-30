import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

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
  'Add three rolling Push 1': (deck: Card[]) => {
    return [
      ...deck,
      bruteCards.rollingPush1,
      bruteCards.rollingPush1,
      bruteCards.rollingPush1,
    ];
  },
  'Add two rolling Pierce 3': (deck: Card[]) => {
    return [...deck, bruteCards.rollingPierce3, bruteCards.rollingPierce3];
  },
  'Add rolling Stun': (deck: Card[]) => {
    return [...deck, bruteCards.rollingStun];
  },
  'Add rolling Disarm and rolling Muddle': (deck: Card[]) => {
    return [...deck, bruteCards.rollingDisarm, bruteCards.rollingMuddle];
  },
  'Add one rolling Add Target': (deck: Card[]) => {
    return [...deck, bruteCards.rollingAddTarget];
  },
  'Add one Plus 1 Shield 1 Self': (deck: Card[]) => {
    return [...deck, bruteCards.plus1Shield1Self];
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
      addAction: BasicPerkAction['Add two +1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: BasicPerkAction['Add two +1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+3) card',
      addAction: bruteActions['Add one +3 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Push 1] cards',
      addAction: bruteActions['Add three rolling Push 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Push 1] cards',
      addAction: bruteActions['Add three rolling Push 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
      addAction: bruteActions['Add two rolling Pierce 3'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: bruteActions['Add rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: bruteActions['Add rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
      addAction: bruteActions['Add rolling Disarm and rolling Muddle'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: bruteActions['Add one rolling Add Target'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: bruteActions['Add one rolling Add Target'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1, Self] card',
      addAction: bruteActions['Add one Plus 1 Shield 1 Self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add one (+1) card',
      addAction:
        BasicPerkAction['Ignore negative item effects and add one (+1) card'],
    },
  ];
}
