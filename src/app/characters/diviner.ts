import { basicCards, Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const divinerCards = {
  plus1Heal2Ally: {
    img: 'assets/cards/diviner/Plus1Heal2Ally.png',
    name: 'Plus 1 Heal 2 Ally',
    id: CardId.divinerPlus1Heal2Ally,
  },
  plus1Shield1Ally: {
    img: 'assets/cards/diviner/Plus1Shield1Ally.png',
    name: 'Plus 1 Shield 1 Ally',
    id: CardId.divinerPlus1Shield1Ally,
  },
  plus3Shield1Self: {
    img: 'assets/cards/diviner/Plus3Shield1Self.png',
    name: 'Plus 3 Shield 1 Self',
    id: CardId.divinerPlus3Shield1Self,
  },
  plus2Curse: {
    img: 'assets/cards/diviner/Plus2Curse.png',
    name: 'Plus 2 Curse',
    id: CardId.divinerPlus2Curse,
  },
  plus2Dark: {
    img: 'assets/cards/diviner/Plus2Dark.png',
    name: 'Plus 2 Dark',
    id: CardId.divinerPlus2Dark,
  },
  plus2Light: {
    img: 'assets/cards/diviner/Plus2Light.png',
    name: 'Plus 2 Light',
    id: CardId.divinerPlus2Light,
  },
  plus3Muddle: {
    img: 'assets/cards/diviner/Plus3Muddle.png',
    name: 'Plus 3 Muddle',
    id: CardId.divinerPlus3Muddle,
  },
  plus2RegenerateSelf: {
    img: 'assets/cards/diviner/Plus2RegenerateSelf.png',
    name: 'Plus 2 Regenerate Self',
    id: CardId.divinerPlus2RegenerateSelf,
  },
  rollingCurse: {
    img: 'assets/cards/diviner/RollingCurse.png',
    name: 'Rolling Curse',
    id: CardId.divinerRollingCurse,
  },
  rollingHeal1Self: {
    img: 'assets/cards/diviner/RollingHeal1Self.png',
    name: 'Rolling Heal 1 Self',
    id: CardId.divinerRollingHeal1Self,
  },
};

export const divinerActions = {
  'Replace one (-1) card with one (+1) [Heal 2 Ally] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus1, newDeck, [divinerCards.plus1Heal2Ally]);
    return newDeck;
  },
  'Replace one (+0) card with one (+2) [Dark] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [divinerCards.plus2Dark]);
    return newDeck;
  },
  'Replace one (+0) card with one (+2) [Light] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [divinerCards.plus2Light]);
    return newDeck;
  },
  'Replace one (+0) card with one (+2) [Curse] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [divinerCards.plus2Curse]);
    return newDeck;
  },
  'Replace one (+0) card with one (+3) [Muddle] card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [divinerCards.plus3Muddle]);
    return newDeck;
  },
  'Replace one (+0) card with one (+2) [Regenerate Self] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [divinerCards.plus2RegenerateSelf]);
    return newDeck;
  },
  'Replace one (+0) card with one (+1) [Shield 1 Ally] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [divinerCards.plus1Shield1Ally]);
    return newDeck;
  },
  'Replace two (+1) cards with one (+3) [Shield 1 Self] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck);
    removeCard(CardId.plus1, newDeck, [divinerCards.plus3Shield1Self]);
    return newDeck;
  },
  'Remove one -2 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus2, newDeck);
    return newDeck;
  },
  'Add two rolling [Heal 1 Self] cards': (deck: Card[]) => {
    return [
      ...deck,
      divinerCards.rollingHeal1Self,
      divinerCards.rollingHeal1Self,
    ];
  },
  'Add two rolling [Curse] cards': (deck: Card[]) => {
    return [...deck, divinerCards.rollingCurse, divinerCards.rollingCurse];
  },
  'Ignore negative scenario effects and add two (+1) cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },
};

export class Diviner implements Character {
  name = 'Diviner';
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
      text: 'Remove one (-2) card',
      addAction: divinerActions['Remove one -2 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
      addAction:
        divinerActions[
          'Replace two (+1) cards with one (+3) [Shield 1 Self] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
      addAction:
        divinerActions[
          'Replace two (+1) cards with one (+3) [Shield 1 Self] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Shield 1 Ally] card',
      addAction:
        divinerActions[
          'Replace one (+0) card with one (+1) [Shield 1 Ally] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Dark] card',
      addAction:
        divinerActions['Replace one (+0) card with one (+2) [Dark] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Light] card',
      addAction:
        divinerActions['Replace one (+0) card with one (+2) [Light] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+3) [Muddle] card',
      addAction:
        divinerActions['Replace one (+0) card with one (+3) [Muddle] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Curse] card',
      addAction:
        divinerActions['Replace one (+0) card with one (+2) [Curse] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Regenerate Self] card',
      addAction:
        divinerActions[
          'Replace one (+0) card with one (+2) [Regenerate Self] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) [Heal 2 Ally] card',
      addAction:
        divinerActions[
          'Replace one (-1) card with one (+1) [Heal 2 Ally] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: divinerActions['Add two rolling [Heal 1 Self] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
      addAction: divinerActions['Add two rolling [Curse] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add two (+1) cards',
      addAction:
        divinerActions[
          'Ignore negative scenario effects and add two (+1) cards'
        ],
    },
  ];
}
