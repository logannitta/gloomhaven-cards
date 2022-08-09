import { CardId, Card } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const scoundrelCards = {
  rollingInvisible: {
    img: 'assets/cards/scoundrel/RollingInvisible.png',
    name: 'Rolling Invisible',
    id: CardId.scoundrelRollingInvisible,
  },
  rollingMuddle: {
    img: 'assets/cards/scoundrel/RollingMuddle.png',
    name: 'Rolling Muddle',
    id: CardId.scoundrelRollingMuddle,
  },
  rollingPoison: {
    img: 'assets/cards/scoundrel/RollingPoison.png',
    name: 'Rolling Poison',
    id: CardId.scoundrelRollingPoison,
  },
  rollingPierce3: {
    img: 'assets/cards/scoundrel/RollingPierce3.png',
    name: 'Rolling Pierce 3',
    id: CardId.scoundrelRollingPierce3,
  },
  rollingPlus1: {
    img: 'assets/cards/scoundrel/RollingPlus1.png',
    name: 'Rolling Plus 1',
    id: CardId.scoundrelRollingPlus1,
  },
};

export const scoundrelActions = {
  'Add one rolling [Invisible] card': (deck: Card[]) => {
    return [...deck, scoundrelCards.rollingInvisible];
  },
  'Undo Add one rolling [Invisible] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.scoundrelRollingInvisible, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling (+1) cards': (deck: Card[]) => {
    return [...deck, scoundrelCards.rollingPlus1, scoundrelCards.rollingPlus1];
  },
  'Undo Add two rolling (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.scoundrelRollingPlus1, newDeck);
      removeCard(CardId.scoundrelRollingPlus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Muddle] card': (deck: Card[]) => {
    return [
      ...deck,
      scoundrelCards.rollingMuddle,
      scoundrelCards.rollingMuddle,
    ];
  },
  'Undo Add two rolling [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.scoundrelRollingMuddle, newDeck);
      removeCard(CardId.scoundrelRollingMuddle, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Poison] card': (deck: Card[]) => {
    return [
      ...deck,
      scoundrelCards.rollingPoison,
      scoundrelCards.rollingPoison,
    ];
  },
  'Undo Add two rolling [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.scoundrelRollingPoison, newDeck);
      removeCard(CardId.scoundrelRollingPoison, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Pierce 3] cards': (deck: Card[]) => {
    return [
      ...deck,
      scoundrelCards.rollingPierce3,
      scoundrelCards.rollingPierce3,
    ];
  },
  'Undo Add two rolling [Pierce 3] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.scoundrelRollingPierce3, newDeck);
      removeCard(CardId.scoundrelRollingPierce3, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class Scoundrel implements Character {
  name = 'Scoundrel';
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
      text: 'Replace one (-2) card with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
      removeAction: BasicPerkAction['Undo Replace one -2 with one +0 card'],
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
      text: 'Replace one (+0) card with one (+2) card',
      addAction: BasicPerkAction['Replace one +0 with one +2 card'],
      removeAction: BasicPerkAction['Undo Replace one +0 with one +2 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) card',
      addAction: BasicPerkAction['Replace one +0 with one +2 card'],
      removeAction: BasicPerkAction['Undo Replace one +0 with one +2 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: scoundrelActions['Add two rolling (+1) cards'],
      removeAction: scoundrelActions['Undo Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: scoundrelActions['Add two rolling (+1) cards'],
      removeAction: scoundrelActions['Undo Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
      addAction: scoundrelActions['Add two rolling [Pierce 3] cards'],
      removeAction: scoundrelActions['Undo Add two rolling [Pierce 3] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] card',
      addAction: scoundrelActions['Add two rolling [Poison] card'],
      removeAction: scoundrelActions['Undo Add two rolling [Poison] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] card',
      addAction: scoundrelActions['Add two rolling [Poison] card'],
      removeAction: scoundrelActions['Undo Add two rolling [Poison] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Muddle] card',
      addAction: scoundrelActions['Add two rolling [Muddle] card'],
      removeAction: scoundrelActions['Undo Add two rolling [Muddle] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Invisible] card',
      addAction: scoundrelActions['Add one rolling [Invisible] card'],
      removeAction: scoundrelActions['Undo Add one rolling [Invisible] card'],
    },
  ];
}
