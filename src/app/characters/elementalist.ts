import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const elementalistCards = {
  plus0AddTarget: {
    img: 'assets/cards/elementalist/Plus0AddTarget.png',
    name: 'Plus 0 Add Target',
    id: CardId.elementalistPlus0AddTarget,
  },
  plus0Air: {
    img: 'assets/cards/elementalist/Plus0Air.png',
    name: 'Plus 0 Air',
    id: CardId.elementalistPlus0Air,
  },
  plus0Earth: {
    img: 'assets/cards/elementalist/Plus0Earth.png',
    name: 'Plus 0 Earth',
    id: CardId.elementalistPlus0Earth,
  },
  plus0Fire: {
    img: 'assets/cards/elementalist/Plus0Fire.png',
    name: 'Plus 0 Fire',
    id: CardId.elementalistPlus0Fire,
  },
  plus0Ice: {
    img: 'assets/cards/elementalist/Plus0Ice.png',
    name: 'Plus 0 Ice',
    id: CardId.elementalistPlus0Ice,
  },
  plus0Stun: {
    img: 'assets/cards/elementalist/Plus0Stun.png',
    name: 'Plus 0 Stun',
    id: CardId.elementalistPlus0Stun,
  },
  plus1Push1: {
    img: 'assets/cards/elementalist/Plus1Push1.png',
    name: 'Plus 1 Push 1',
    id: CardId.elementalistPlus1Push1,
  },
  plus1Wound: {
    img: 'assets/cards/elementalist/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.elementalistPlus1Wound,
  },
};

export const elementalistActions = {
  'Add one (+0) [Add Target] card': (deck: Card[]) => {
    return [...deck, elementalistCards.plus0AddTarget];
  },
  'Undo Add one (+0) [Add Target] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus0AddTarget, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+0) [Stun] card': (deck: Card[]) => {
    return [...deck, elementalistCards.plus0Stun];
  },
  'Undo Add one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus0Stun, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Wound] card': (deck: Card[]) => {
    return [...deck, elementalistCards.plus1Wound];
  },
  'Undo Add one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus1Wound, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three (+0) [Fire] cards': (deck: Card[]) => {
    return [
      ...deck,
      elementalistCards.plus0Fire,
      elementalistCards.plus0Fire,
      elementalistCards.plus0Fire,
    ];
  },
  'Undo Add three (+0) [Fire] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus0Fire, newDeck);
      removeCard(CardId.elementalistPlus0Fire, newDeck);
      removeCard(CardId.elementalistPlus0Fire, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three (+0) [Ice] cards': (deck: Card[]) => {
    return [
      ...deck,
      elementalistCards.plus0Ice,
      elementalistCards.plus0Ice,
      elementalistCards.plus0Ice,
    ];
  },
  'Undo Add three (+0) [Ice] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus0Ice, newDeck);
      removeCard(CardId.elementalistPlus0Ice, newDeck);
      removeCard(CardId.elementalistPlus0Ice, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three (+0) [Air] cards': (deck: Card[]) => {
    return [
      ...deck,
      elementalistCards.plus0Air,
      elementalistCards.plus0Air,
      elementalistCards.plus0Air,
    ];
  },
  'Undo Add three (+0) [Air] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus0Air, newDeck);
      removeCard(CardId.elementalistPlus0Air, newDeck);
      removeCard(CardId.elementalistPlus0Air, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three (+0) [Earth] cards': (deck: Card[]) => {
    return [
      ...deck,
      elementalistCards.plus0Earth,
      elementalistCards.plus0Earth,
      elementalistCards.plus0Earth,
    ];
  },
  'Undo Add three (+0) [Earth] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus0Earth, newDeck);
      removeCard(CardId.elementalistPlus0Earth, newDeck);
      removeCard(CardId.elementalistPlus0Earth, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two (+1) [Push 1] cards': (deck: Card[]) => {
    return [
      ...deck,
      elementalistCards.plus1Push1,
      elementalistCards.plus1Push1,
    ];
  },
  'Undo Add two (+1) [Push 1] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.elementalistPlus1Push1, newDeck);
      removeCard(CardId.elementalistPlus1Push1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth] card':
    (deck: Card[]) => {
      const newDeck = [...deck];
      try {
        removeCard(CardId.plus0, newDeck, [elementalistCards.plus0Fire]);
        removeCard(CardId.plus0, newDeck, [elementalistCards.plus0Earth]);
      } catch (error) {
        return false;
      }
      return newDeck;
    },
  'Undo Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth] card':
    (deck: Card[]) => {
      const newDeck = [...deck];
      try {
        removeCard(CardId.elementalistPlus0Fire, newDeck, [basicCards.plus0]);
        removeCard(CardId.elementalistPlus0Earth, newDeck, [basicCards.plus0]);
      } catch (error) {
        return false;
      }
      return newDeck;
    },
  'Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [elementalistCards.plus0Ice]);
      removeCard(CardId.plus0, newDeck, [elementalistCards.plus0Air]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air] card':
    (deck: Card[]) => {
      const newDeck = [...deck];
      try {
        removeCard(CardId.elementalistPlus0Ice, newDeck, [basicCards.plus0]);
        removeCard(CardId.elementalistPlus0Air, newDeck, [basicCards.plus0]);
      } catch (error) {
        return false;
      }
      return newDeck;
    },
};

export class Elementalist implements Character {
  name = 'Elementalist';
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
      text: 'Add three (+0) [Fire] cards',
      addAction: elementalistActions['Add three (+0) [Fire] cards'],
      removeAction: elementalistActions['Undo Add three (+0) [Fire] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three (+0) [Ice] cards',
      addAction: elementalistActions['Add three (+0) [Ice] cards'],
      removeAction: elementalistActions['Undo Add three (+0) [Ice] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three (+0) [Air] cards',
      addAction: elementalistActions['Add three (+0) [Air] cards'],
      removeAction: elementalistActions['Undo Add three (+0) [Air] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three (+0) [Earth] cards',
      addAction: elementalistActions['Add three (+0) [Earth] cards'],
      removeAction: elementalistActions['Undo Add three (+0) [Earth] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth] card',
      addAction:
        elementalistActions[
          'Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth] card'
        ],
      removeAction:
        elementalistActions[
          'Undo Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air] card',
      addAction:
        elementalistActions[
          'Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air] card'
        ],
      removeAction:
        elementalistActions[
          'Undo Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) [Push 1] cards',
      addAction: elementalistActions['Add two (+1) [Push 1] cards'],
      removeAction: elementalistActions['Undo Add two (+1) [Push 1] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: elementalistActions['Add one (+1) [Wound] card'],
      removeAction: elementalistActions['Undo Add one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Stun] card',
      addAction: elementalistActions['Add one (+0) [Stun] card'],
      removeAction: elementalistActions['Undo Add one (+0) [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Add Target] card',
      addAction: elementalistActions['Add one (+0) [Add Target] card'],
      removeAction: elementalistActions['Undo Add one (+0) [Add Target] card'],
    },
  ];
}
