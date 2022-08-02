import { basicCards, Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const demolitionistCards = {
  plus0AdjacentSuffer1: {
    img: 'assets/cards/demolitionist/Plus0AdjacentSuffer1.png',
    damage: 0,
    name: 'Plus 0 Adjacent Suffer 1',
    id: CardId.demolitionistPlus0AdjacentSuffer1,
  },
  plus0Poison: {
    img: 'assets/cards/demolitionist/Plus0Poison.png',
    name: 'Plus 0 Poison',
    id: CardId.demolitionistPlus0Poison,
  },
  plus2: {
    img: 'assets/cards/demolitionist/Plus2.png',
    name: 'Plus 2',
    id: CardId.demolitionistPlus2,
  },
  plus2Earth: {
    img: 'assets/cards/demolitionist/Plus2Earth.png',
    name: 'Plus 2 Earth',
    id: CardId.demolitionistPlus2Earth,
  },
  plus2Fire: {
    img: 'assets/cards/demolitionist/Plus2Fire.png',
    name: 'Plus 2 Fire',
    id: CardId.demolitionistPlus2Fire,
  },
  plus2Muddle: {
    img: 'assets/cards/demolitionist/Plus2Muddle.png',
    name: 'Plus 2 Muddle',
    id: CardId.demolitionistPlus2Muddle,
  },
};

export const demolitionistActions = {
  'Add one +0 all adjacent suffer 1': (deck: Card[]) => {
    return [...deck, demolitionistCards.plus0AdjacentSuffer1];
  },
  'Undo Add one +0 all adjacent suffer 1': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.demolitionistPlus0AdjacentSuffer1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+2)': (deck: Card[]) => {
    return [...deck, demolitionistCards.plus2];
  },
  'Undo Add one (+2)': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.demolitionistPlus2, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) card with one (+2) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [demolitionistCards.plus2Muddle]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+2) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.demolitionistPlus2Muddle, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (-1) card with one (+0) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.minus1, newDeck, [demolitionistCards.plus0Poison]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (-1) card with one (+0) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.demolitionistPlus0Poison, newDeck, [basicCards.minus1]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+1) card with one (+2) [Fire] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck, [demolitionistCards.plus2Fire]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+1) card with one (+2) [Fire] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.demolitionistPlus2Fire, newDeck, [basicCards.plus1]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+1) card with one (+2) [Earth] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck, [demolitionistCards.plus2Earth]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+1) card with one (+2) [Earth] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.demolitionistPlus2Earth, newDeck, [basicCards.plus1]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Remove one (-2) card and one (+1) card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.minus2, newDeck);
      removeCard(CardId.plus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Remove one (-2) card and one (+1) card': (deck: Card[]) => {
    return [...deck, basicCards.minus2, basicCards.plus1];
  },
};

export class Demolitionist implements Character {
  name = 'Demolitionist';
  health = 12;
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
      text: 'Remove one (-2) card and one (+1) card',
      addAction: demolitionistActions['Remove one (-2) card and one (+1) card'],
      removeAction:
        demolitionistActions['Undo Remove one (-2) card and one (+1) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Muddle] card',
      addAction:
        demolitionistActions[
          'Replace one (+0) card with one (+2) [Muddle] card'
        ],
      removeAction:
        demolitionistActions[
          'Undo Replace one (+0) card with one (+2) [Muddle] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Muddle] card',
      addAction:
        demolitionistActions[
          'Replace one (+0) card with one (+2) [Muddle] card'
        ],
      removeAction:
        demolitionistActions[
          'Undo Replace one (+0) card with one (+2) [Muddle] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+0) [Poison] card',
      addAction:
        demolitionistActions[
          'Replace one (-1) card with one (+0) [Poison] card'
        ],
      removeAction:
        demolitionistActions[
          'Undo Replace one (-1) card with one (+0) [Poison] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) card',
      addAction: demolitionistActions['Add one (+2)'],
      removeAction: demolitionistActions['Undo Add one (+2)'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) card',
      addAction: demolitionistActions['Add one (+2)'],
      removeAction: demolitionistActions['Undo Add one (+2)'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Earth] card',
      addAction:
        demolitionistActions[
          'Replace one (+1) card with one (+2) [Earth] card'
        ],
      removeAction:
        demolitionistActions[
          'Undo Replace one (+1) card with one (+2) [Earth] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Earth] card',
      addAction:
        demolitionistActions[
          'Replace one (+1) card with one (+2) [Earth] card'
        ],
      removeAction:
        demolitionistActions[
          'Undo Replace one (+1) card with one (+2) [Earth] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Fire] card',
      addAction:
        demolitionistActions['Replace one (+1) card with one (+2) [Fire] card'],
      removeAction:
        demolitionistActions[
          'Undo Replace one (+1) card with one (+2) [Fire] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Fire] card',
      addAction:
        demolitionistActions['Replace one (+1) card with one (+2) [Fire] card'],
      removeAction:
        demolitionistActions[
          'Undo Replace one (+1) card with one (+2) [Fire] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [All adjacent enemies suffer 1 damage]',
      addAction: demolitionistActions['Add one +0 all adjacent suffer 1'],
      removeAction:
        demolitionistActions['Undo Add one +0 all adjacent suffer 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [All adjacent enemies suffer 1 damage]',
      addAction: demolitionistActions['Add one +0 all adjacent suffer 1'],
      removeAction:
        demolitionistActions['Undo Add one +0 all adjacent suffer 1'],
    },
  ];
}
