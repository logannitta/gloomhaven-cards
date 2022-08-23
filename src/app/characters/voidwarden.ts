import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const voidwardenCards = {
  plus3: {
    img: 'assets/cards/voidwarden/Plus3.png',
    name: 'Plus 3',
    id: CardId.voidwardenPlus3,
  },
  plus1Poison: {
    img: 'assets/cards/voidwarden/Plus1Poison.png',
    name: 'Plus 1 Poison',
    id: CardId.voidwardenPlus1Poison,
  },
  plus1Ice: {
    img: 'assets/cards/voidwarden/Plus1Ice.png',
    name: 'Plus 1 Ice',
    id: CardId.voidwardenPlus1Ice,
  },
  plus1Dark: {
    img: 'assets/cards/voidwarden/Plus1Dark.png',
    name: 'Plus 1 Dark',
    id: CardId.voidwardenPlus1Dark,
  },
  plus1Curse: {
    img: 'assets/cards/voidwarden/Plus1Curse.png',
    name: 'Plus 1 Curse',
    id: CardId.voidwardenPlus1Curse,
  },
  plus1Heal1Ally: {
    img: 'assets/cards/voidwarden/Plus1Heal1Ally.png',
    name: 'Plus 1 Heal 1 Ally',
    id: CardId.voidwardenPlus1Heal1Ally,
  },
  plus0Heal1Ally: {
    img: 'assets/cards/voidwarden/Plus0Heal1Ally.png',
    name: 'Plus 0 Heal 1 Ally',
    id: CardId.voidwardenPlus0Heal1Ally,
  },
};

export const voidwardenActions = {
  'Add one (+3) card': (deck: Card[]) => {
    return [...deck, voidwardenCards.plus3];
  },
  'Undo Add one (+3) card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus3, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Heal 1 Ally] card': (deck: Card[]) => {
    return [...deck, voidwardenCards.plus1Heal1Ally];
  },
  'Undo Add one (+1) [Heal 1 Ally] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus1Heal1Ally, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Curse] card': (deck: Card[]) => {
    return [...deck, voidwardenCards.plus1Curse];
  },
  'Undo Add one (+1) [Curse] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus1Curse, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Poison] card': (deck: Card[]) => {
    return [...deck, voidwardenCards.plus1Poison];
  },
  'Undo Add one (+1) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus1Poison, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Remove one (-2) card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.minus2, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Remove one (-2) card': (deck: Card[]) => {
    return [...deck, basicCards.minus2];
  },
  'Replace one (+0) card with one (+1) [Dark] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [voidwardenCards.plus1Dark]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Dark] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus1Dark, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Ice] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [voidwardenCards.plus1Ice]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Ice] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus1Ice, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (-1) card with one (+0) [Heal 1 Ally] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.minus1, newDeck, [voidwardenCards.plus0Heal1Ally]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (-1) card with one (+0) [Heal 1 Ally] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.voidwardenPlus0Heal1Ally, newDeck, [basicCards.minus1]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class Voidwarden implements Character {
  name = 'Voidwarden';
  image = 'assets/classes/Voidwarden/Voidwardenimg.png';
  icon = 'assets/classes/Voidwarden/Voidwarden.png';
  health = [12];
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
      text: 'Remove one (-2) card',
      addAction: voidwardenActions['Remove one (-2) card'],
      removeAction: voidwardenActions['Undo Remove one (-2) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Dark] card',
      addAction:
        voidwardenActions['Replace one (+0) card with one (+1) [Dark] card'],
      removeAction:
        voidwardenActions[
          'Undo Replace one (+0) card with one (+1) [Dark] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Dark] card',
      addAction:
        voidwardenActions['Replace one (+0) card with one (+1) [Dark] card'],
      removeAction:
        voidwardenActions[
          'Undo Replace one (+0) card with one (+1) [Dark] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Ice] card',
      addAction:
        voidwardenActions['Replace one (+0) card with one (+1) [Ice] card'],
      removeAction:
        voidwardenActions[
          'Undo Replace one (+0) card with one (+1) [Ice] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Ice] card',
      addAction:
        voidwardenActions['Replace one (+0) card with one (+1) [Ice] card'],
      removeAction:
        voidwardenActions[
          'Undo Replace one (+0) card with one (+1) [Ice] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+0) [Heal 1 Ally] card',
      addAction:
        voidwardenActions[
          'Replace one (-1) card with one (+0) [Heal 1 Ally] card'
        ],
      removeAction:
        voidwardenActions[
          'Undo Replace one (-1) card with one (+0) [Heal 1 Ally] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+0) [Heal 1 Ally] card',
      addAction:
        voidwardenActions[
          'Replace one (-1) card with one (+0) [Heal 1 Ally] card'
        ],
      removeAction:
        voidwardenActions[
          'Undo Replace one (-1) card with one (+0) [Heal 1 Ally] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 1 Ally] card',
      addAction: voidwardenActions['Add one (+1) [Heal 1 Ally] card'],
      removeAction: voidwardenActions['Undo Add one (+1) [Heal 1 Ally] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 1 Ally] card',
      addAction: voidwardenActions['Add one (+1) [Heal 1 Ally] card'],
      removeAction: voidwardenActions['Undo Add one (+1) [Heal 1 Ally] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 1 Ally] card',
      addAction: voidwardenActions['Add one (+1) [Heal 1 Ally] card'],
      removeAction: voidwardenActions['Undo Add one (+1) [Heal 1 Ally] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Poison] card',
      addAction: voidwardenActions['Add one (+1) [Poison] card'],
      removeAction: voidwardenActions['Undo Add one (+1) [Poison] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+3) card',
      addAction: voidwardenActions['Add one (+3) card'],
      removeAction: voidwardenActions['Undo Add one (+3) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Curse] card',
      addAction: voidwardenActions['Add one (+1) [Curse] card'],
      removeAction: voidwardenActions['Undo Add one (+1) [Curse] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Curse] card',
      addAction: voidwardenActions['Add one (+1) [Curse] card'],
      removeAction: voidwardenActions['Undo Add one (+1) [Curse] card'],
    },
  ];
}
