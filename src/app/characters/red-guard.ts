import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const redguardCards = {
  plus1FireLight: {
    img: 'assets/cards/redguard/Plus1FireLight.png',
    name: 'Plus 1 Fire Light',
    id: CardId.redguardPlus1FireLight,
  },
  plus1Immobilize: {
    img: 'assets/cards/redguard/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.redguardPlus1Immobilize,
  },
  plus1Shield1Self: {
    img: 'assets/cards/redguard/Plus1Shield1Self.png',
    name: 'Plus 1 Shield 1 Self',
    id: CardId.redguardPlus1Shield1Self,
  },
  plus1Wound: {
    img: 'assets/cards/redguard/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.redguardPlus1Wound,
  },
  plus2Fire: {
    img: 'assets/cards/redguard/Plus2Fire.png',
    name: 'Plus 2 Fire',
    id: CardId.redguardPlus2Fire,
  },
  plus2Light: {
    img: 'assets/cards/redguard/Plus2Light.png',
    name: 'Plus 2 Light',
    id: CardId.redguardPlus2Light,
  },
};

export const redguardActions = {
  'Add one (+1) [Fire and Light] card': (deck: Card[]) => {
    return [...deck, redguardCards.plus1FireLight];
  },
  'Undo Add one (+1) [Fire and Light] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.redguardPlus1FireLight, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Shield 1 Self] card': (deck: Card[]) => {
    return [...deck, redguardCards.plus1Shield1Self];
  },
  'Undo Add one (+1) [Shield 1 Self] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.redguardPlus1Shield1Self, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+1) card with one (+2) [Fire] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck, [redguardCards.plus2Fire]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+1) card with one (+2) [Fire] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.redguardPlus2Fire, newDeck, [basicCards.plus1]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+1) card with one (+2) [Light] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck, [redguardCards.plus2Light]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+1) card with one (+2) [Light] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.redguardPlus2Light, newDeck, [basicCards.plus1]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Immobilize] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [redguardCards.plus1Immobilize]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Immobilize] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.redguardPlus1Immobilize, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [redguardCards.plus1Wound]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) card with one (+1) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.redguardPlus1Wound, newDeck, [basicCards.plus0]);
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

export class RedGuard implements Character {
  name = 'Red Guard';
  image = 'assets/classes/RedGuard/RedGuard.png';
  icon = 'assets/classes/RedGuard/Red Guard.png';
  health = [12];
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
      text: 'Remove one (-2) card and one (+1) card',
      addAction: redguardActions['Remove one (-2) card and one (+1) card'],
      removeAction:
        redguardActions['Undo Remove one (-2) card and one (+1) card'],
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
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Fire] card',
      addAction:
        redguardActions['Replace one (+1) card with one (+2) [Fire] card'],
      removeAction:
        redguardActions['Undo Replace one (+1) card with one (+2) [Fire] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Fire] card',
      addAction:
        redguardActions['Replace one (+1) card with one (+2) [Fire] card'],
      removeAction:
        redguardActions['Undo Replace one (+1) card with one (+2) [Fire] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Light] card',
      addAction:
        redguardActions['Replace one (+1) card with one (+2) [Light] card'],
      removeAction:
        redguardActions[
          'Undo Replace one (+1) card with one (+2) [Light] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Light] card',
      addAction:
        redguardActions['Replace one (+1) card with one (+2) [Light] card'],
      removeAction:
        redguardActions[
          'Undo Replace one (+1) card with one (+2) [Light] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Fire and Light] card',
      addAction: redguardActions['Add one (+1) [Fire and Light] card'],
      removeAction: redguardActions['Undo Add one (+1) [Fire and Light] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Fire and Light] card',
      addAction: redguardActions['Add one (+1) [Fire and Light] card'],
      removeAction: redguardActions['Undo Add one (+1) [Fire and Light] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1 Self] card',
      addAction: redguardActions['Add one (+1) [Shield 1 Self] card'],
      removeAction: redguardActions['Undo Add one (+1) [Shield 1 Self] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1 Self] card',
      addAction: redguardActions['Add one (+1) [Shield 1 Self] card'],
      removeAction: redguardActions['Undo Add one (+1) [Shield 1 Self] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Immobilize] card',
      addAction:
        redguardActions[
          'Replace one (+0) card with one (+1) [Immobilize] card'
        ],
      removeAction:
        redguardActions[
          'Undo Replace one (+0) card with one (+1) [Immobilize] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Wound] card',
      addAction:
        redguardActions['Replace one (+0) card with one (+1) [Wound] card'],
      removeAction:
        redguardActions[
          'Undo Replace one (+0) card with one (+1) [Wound] card'
        ],
    },
  ];
}
