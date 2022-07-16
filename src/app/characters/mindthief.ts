import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const mindthiefCards = {
  plus2Ice: {
    img: 'assets/cards/mindthief/Plus2Ice.png',
    name: 'Plus 2 Ice',
    id: CardId.mindthiefPlus2Ice,
  },
  rollingDisarm: {
    img: 'assets/cards/mindthief/RollingDisarm.png',
    name: 'Rolling Disarm',
    id: CardId.mindthiefRollingDisarm,
  },
  rollingImmobilize: {
    img: 'assets/cards/mindthief/RollingImmobilize.png',
    name: 'Rolling Immobilize',
    id: CardId.mindthiefRollingImmobilize,
  },
  rollingMuddle: {
    img: 'assets/cards/mindthief/RollingMuddle.png',
    name: 'Rolling Muddle',
    id: CardId.mindthiefRollingMuddle,
  },
  rollingPlus1: {
    img: 'assets/cards/mindthief/RollingPlus1.png',
    name: 'Rolling Plus 1',
    id: CardId.mindthiefRollingPlus1,
  },
  rollingPull1: {
    img: 'assets/cards/mindthief/RollingPull1.png',
    name: 'Rolling Pull 1',
    id: CardId.mindthiefRollingPull1,
  },
  rollingStun: {
    img: 'assets/cards/mindthief/RollingStun.png',
    name: 'Rolling Stun',
    id: CardId.mindthiefRollingStun,
  },
};

export const mindthiefActions = {
  'Add one (+2) Ice card': (deck: Card[]) => {
    return [...deck, mindthiefCards.plus2Ice];
  },
  'Add two rolling (+1) cards': (deck: Card[]) => {
    return [...deck, mindthiefCards.rollingPlus1, mindthiefCards.rollingPlus1];
  },
  'Add one rolling [Stun] card': (deck: Card[]) => {
    return [...deck, mindthiefCards.rollingStun];
  },
  'Add two rolling [Immobilize] cards': (deck: Card[]) => {
    return [
      ...deck,
      mindthiefCards.rollingImmobilize,
      mindthiefCards.rollingImmobilize,
    ];
  },
  'Add one rolling [Disarm] card and one rolling [Muddle] card': (
    deck: Card[]
  ) => {
    return [
      ...deck,
      mindthiefCards.rollingDisarm,
      mindthiefCards.rollingMuddle,
    ];
  },
  'Add three rolling [Pull 1] cards': (deck: Card[]) => {
    return [
      ...deck,
      mindthiefCards.rollingPull1,
      mindthiefCards.rollingPull1,
      mindthiefCards.rollingPull1,
    ];
  },
  'Add three rolling [Muddle] cards': (deck: Card[]) => {
    return [
      ...deck,
      mindthiefCards.rollingMuddle,
      mindthiefCards.rollingMuddle,
      mindthiefCards.rollingMuddle,
    ];
  },
  'Replace two (+1) cards with two (+2) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck, [basicCards.plus2]);
    removeCard(CardId.plus1, newDeck, [basicCards.plus2]);
    return newDeck;
  },
};

export class Mindthief implements Character {
  name = 'Mindthief';
  health = 12;
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
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with two (+2) cards',
      addAction: mindthiefActions['Replace two (+1) cards with two (+2) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) card with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: mindthiefActions['Add one (+2) Ice card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: mindthiefActions['Add one (+2) Ice card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: mindthiefActions['Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: mindthiefActions['Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Pull 1] cards',
      addAction: mindthiefActions['Add three rolling [Pull 1] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
      addAction: mindthiefActions['Add three rolling [Muddle] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Immobilize] cards',
      addAction: mindthiefActions['Add two rolling [Immobilize] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: mindthiefActions['Add one rolling [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
      addAction:
        mindthiefActions[
          'Add one rolling [Disarm] card and one rolling [Muddle] card'
        ],
    },
  ];
}
