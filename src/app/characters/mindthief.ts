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
  'Undo Add one (+2) Ice card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefPlus2Ice, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling (+1) cards': (deck: Card[]) => {
    return [...deck, mindthiefCards.rollingPlus1, mindthiefCards.rollingPlus1];
  },
  'Undo Add two rolling (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefRollingPlus1, newDeck);
      removeCard(CardId.mindthiefRollingPlus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling [Stun] card': (deck: Card[]) => {
    return [...deck, mindthiefCards.rollingStun];
  },
  'Undo Add one rolling [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefRollingStun, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Immobilize] cards': (deck: Card[]) => {
    return [
      ...deck,
      mindthiefCards.rollingImmobilize,
      mindthiefCards.rollingImmobilize,
    ];
  },
  'Undo Add two rolling [Immobilize] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefRollingImmobilize, newDeck);
      removeCard(CardId.mindthiefRollingImmobilize, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
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
  'Undo Add one rolling [Disarm] card and one rolling [Muddle] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefRollingDisarm, newDeck);
      removeCard(CardId.mindthiefRollingMuddle, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three rolling [Pull 1] cards': (deck: Card[]) => {
    return [
      ...deck,
      mindthiefCards.rollingPull1,
      mindthiefCards.rollingPull1,
      mindthiefCards.rollingPull1,
    ];
  },
  'Undo Add three rolling [Pull 1] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefRollingPull1, newDeck);
      removeCard(CardId.mindthiefRollingPull1, newDeck);
      removeCard(CardId.mindthiefRollingPull1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three rolling [Muddle] cards': (deck: Card[]) => {
    return [
      ...deck,
      mindthiefCards.rollingMuddle,
      mindthiefCards.rollingMuddle,
      mindthiefCards.rollingMuddle,
    ];
  },
  'Undo Add three rolling [Muddle] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.mindthiefRollingMuddle, newDeck);
      removeCard(CardId.mindthiefRollingMuddle, newDeck);
      removeCard(CardId.mindthiefRollingMuddle, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace two (+1) cards with two (+2) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck, [basicCards.plus2]);
      removeCard(CardId.plus1, newDeck, [basicCards.plus2]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace two (+1) cards with two (+2) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus2, newDeck, [basicCards.plus1]);
      removeCard(CardId.plus2, newDeck, [basicCards.plus1]);
    } catch (error) {
      return false;
    }
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
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
      removeAction: BasicPerkAction['Undo Remove four +0 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with two (+2) cards',
      addAction: mindthiefActions['Replace two (+1) cards with two (+2) cards'],
      removeAction:
        mindthiefActions['Undo Replace two (+1) cards with two (+2) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) card with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
      removeAction: BasicPerkAction['Undo Replace one -2 with one +0 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: mindthiefActions['Add one (+2) Ice card'],
      removeAction: mindthiefActions['Undo Add one (+2) Ice card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Ice] card',
      addAction: mindthiefActions['Add one (+2) Ice card'],
      removeAction: mindthiefActions['Undo Add one (+2) Ice card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: mindthiefActions['Add two rolling (+1) cards'],
      removeAction: mindthiefActions['Undo Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: mindthiefActions['Add two rolling (+1) cards'],
      removeAction: mindthiefActions['Undo Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Pull 1] cards',
      addAction: mindthiefActions['Add three rolling [Pull 1] cards'],
      removeAction: mindthiefActions['Undo Add three rolling [Pull 1] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
      addAction: mindthiefActions['Add three rolling [Muddle] cards'],
      removeAction: mindthiefActions['Undo Add three rolling [Muddle] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Immobilize] cards',
      addAction: mindthiefActions['Add two rolling [Immobilize] cards'],
      removeAction: mindthiefActions['Undo Add two rolling [Immobilize] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: mindthiefActions['Add one rolling [Stun] card'],
      removeAction: mindthiefActions['Undo Add one rolling [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
      addAction:
        mindthiefActions[
          'Add one rolling [Disarm] card and one rolling [Muddle] card'
        ],
      removeAction:
        mindthiefActions[
          'Undo Add one rolling [Disarm] card and one rolling [Muddle] card'
        ],
    },
  ];
}
