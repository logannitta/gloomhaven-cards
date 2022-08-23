import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const soothsingerCards = {
  plus0Stun: {
    img: 'assets/cards/soothsinger/Plus0Stun.png',
    name: 'Plus 0 Stun',
    id: CardId.soothsingerPlus0Stun,
  },
  plus1Disarm: {
    img: 'assets/cards/soothsinger/Plus1Disarm.png',
    name: 'Plus 1 Disarm',
    id: CardId.soothsingerPlus1Disarm,
  },
  plus1Immobilize: {
    img: 'assets/cards/soothsinger/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.soothsingerPlus1Immobilize,
  },
  plus2Curse: {
    img: 'assets/cards/soothsinger/Plus2Curse.png',
    name: 'Plus 2 Curse',
    id: CardId.soothsingerPlus2Curse,
  },
  plus2Poison: {
    img: 'assets/cards/soothsinger/Plus2Poison.png',
    name: 'Plus 2 Poison',
    id: CardId.soothsingerPlus2Poison,
  },
  plus2Wound: {
    img: 'assets/cards/soothsinger/Plus2Wound.png',
    name: 'Plus 2 Wound',
    id: CardId.soothsingerPlus2Wound,
  },
  plus3Muddle: {
    img: 'assets/cards/soothsinger/Plus3Muddle.png',
    name: 'Plus 3 Muddle',
    id: CardId.soothsingerPlus3Muddle,
  },
  plus4: {
    img: 'assets/cards/soothsinger/Plus4.png',
    name: 'Plus 4',
    id: CardId.soothsingerPlus4,
  },
  rollingCurse: {
    img: 'assets/cards/soothsinger/RollingCurse.png',
    name: 'Rolling Curse',
    id: CardId.soothsingerRollingCurse,
  },
  rollingPlus1: {
    img: 'assets/cards/soothsinger/RollingPlus1.png',
    name: 'Rolling Plus 1',
    id: CardId.soothsingerRollingPlus1,
  },
};

export const soothsingerActions = {
  'Replace one (-1) cards with one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.minus1, newDeck, [soothsingerCards.plus0Stun]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (-1) cards with one (+0) [Stun] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus0Stun, newDeck, [basicCards.minus1]);
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
  'Replace two (+1) cards with one (+4) card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus1, newDeck);
      removeCard(CardId.plus1, newDeck, [soothsingerCards.plus4]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace two (+1) cards with one (+4) card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus4, newDeck, [
        basicCards.plus1,
        basicCards.plus1,
      ]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) cards with one (+1) [Immobilize] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [soothsingerCards.plus1Immobilize]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) cards with one (+1) [Immobilize] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus1Immobilize, newDeck, [
        basicCards.plus0,
      ]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) cards with one (+1) [Disarm] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [soothsingerCards.plus1Disarm]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) cards with one (+1) [Disarm] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus1Disarm, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) cards with one (+2) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [soothsingerCards.plus2Wound]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) cards with one (+2) [Wound] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus2Wound, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) cards with one (+2) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [soothsingerCards.plus2Poison]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) cards with one (+2) [Poison] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus2Poison, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) cards with one (+2) [Curse] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [soothsingerCards.plus2Curse]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) cards with one (+2) [Curse] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus2Curse, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (+0) cards with one (+3) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plus0, newDeck, [soothsingerCards.plus3Muddle]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (+0) cards with one (+3) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerPlus3Muddle, newDeck, [basicCards.plus0]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three rolling (+1) cards': (deck: Card[]) => {
    return [
      ...deck,
      soothsingerCards.rollingPlus1,
      soothsingerCards.rollingPlus1,
      soothsingerCards.rollingPlus1,
    ];
  },
  'Undo Add three rolling (+1) cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerRollingPlus1, newDeck);
      removeCard(CardId.soothsingerRollingPlus1, newDeck);
      removeCard(CardId.soothsingerRollingPlus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Curse] cards': (deck: Card[]) => {
    return [
      ...deck,
      soothsingerCards.rollingCurse,
      soothsingerCards.rollingCurse,
    ];
  },
  'Undo Add two rolling [Curse] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.soothsingerRollingCurse, newDeck);
      removeCard(CardId.soothsingerRollingCurse, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class Soothsinger implements Character {
  name = 'Soothsinger';
  image = 'assets/classes/Soothsinger/Soothsingerimg.png';
  icon = 'assets/classes/Soothsinger/Music Notes.png';
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
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
      removeAction: BasicPerkAction['Undo Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove one (-2) card',
      addAction: soothsingerActions['Remove one (-2) card'],
      removeAction: soothsingerActions['Undo Remove one (-2) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+4) card',
      addAction:
        soothsingerActions['Replace two (+1) cards with one (+4) card'],
      removeAction:
        soothsingerActions['Undo Replace two (+1) cards with one (+4) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+4) card',
      addAction:
        soothsingerActions['Replace two (+1) cards with one (+4) card'],
      removeAction:
        soothsingerActions['Undo Replace two (+1) cards with one (+4) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+1) [Immobilize] card',
      addAction:
        soothsingerActions[
          'Replace one (+0) cards with one (+1) [Immobilize] card'
        ],
      removeAction:
        soothsingerActions[
          'Undo Replace one (+0) cards with one (+1) [Immobilize] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+1) [Disarm] card',
      addAction:
        soothsingerActions[
          'Replace one (+0) cards with one (+1) [Disarm] card'
        ],
      removeAction:
        soothsingerActions[
          'Undo Replace one (+0) cards with one (+1) [Disarm] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) [Wound] card',
      addAction:
        soothsingerActions['Replace one (+0) cards with one (+2) [Wound] card'],
      removeAction:
        soothsingerActions[
          'Undo Replace one (+0) cards with one (+2) [Wound] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) [Poison] card',
      addAction:
        soothsingerActions[
          'Replace one (+0) cards with one (+2) [Poison] card'
        ],
      removeAction:
        soothsingerActions[
          'Undo Replace one (+0) cards with one (+2) [Poison] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) [Curse] card',
      addAction:
        soothsingerActions['Replace one (+0) cards with one (+2) [Curse] card'],
      removeAction:
        soothsingerActions[
          'Undo Replace one (+0) cards with one (+2) [Curse] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+3) [Muddle] card',
      addAction:
        soothsingerActions[
          'Replace one (+0) cards with one (+3) [Muddle] card'
        ],
      removeAction:
        soothsingerActions[
          'Undo Replace one (+0) cards with one (+3) [Muddle] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) cards with one (+0) [Stun] card',
      addAction:
        soothsingerActions['Replace one (-1) cards with one (+0) [Stun] card'],
      removeAction:
        soothsingerActions[
          'Undo Replace one (-1) cards with one (+0) [Stun] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling (+1) cards',
      addAction: soothsingerActions['Add three rolling (+1) cards'],
      removeAction: soothsingerActions['Undo Add three rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
      addAction: soothsingerActions['Add two rolling [Curse] cards'],
      removeAction: soothsingerActions['Undo Add two rolling [Curse] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
      addAction: soothsingerActions['Add two rolling [Curse] cards'],
      removeAction: soothsingerActions['Undo Add two rolling [Curse] cards'],
    },
  ];
}
