import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const nightshroudCards = {
  minus1Dark: {
    img: 'assets/cards/nightshroud/Minus1Dark.png',
    name: 'Minus 1 Dark',
    id: CardId.nightshroudMinus1Dark,
  },
  plus1Dark: {
    img: 'assets/cards/nightshroud/Plus1Dark.png',
    name: 'Plus 1 Dark',
    id: CardId.nightshroudPlus1Dark,
  },
  plus1Invisible: {
    img: 'assets/cards/nightshroud/Plus1Invisible.png',
    name: 'Plus 1 Invisible',
    id: CardId.nightshroudPlus1Invisible,
  },
  rollingAddTarget: {
    img: 'assets/cards/nightshroud/RollingAddTarget.png',
    name: 'Rolling Add Target',
    id: CardId.nightshroudRollingAddTarget,
  },
  rollingCurse: {
    img: 'assets/cards/nightshroud/RollingCurse.png',
    name: 'Rolling Curse',
    id: CardId.nightshroudRollingCurse,
  },
  rollingHeal1Self: {
    img: 'assets/cards/nightshroud/RollingHeal1Self.png',
    name: 'Rolling Heal 1 Self',
    id: CardId.nightshroudRollingHeal1Self,
  },
  rollingMuddle: {
    img: 'assets/cards/nightshroud/RollingMuddle.png',
    name: 'Rolling Muddle',
    id: CardId.nightshroudRollingMuddle,
  },
};

export const nightshroudActions = {
  'Add one (-1) [Dark] card': (deck: Card[]) => {
    return [...deck, nightshroudCards.minus1Dark];
  },
  'Undo Add one (-1) [Dark] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudMinus1Dark, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling [Add Target] card': (deck: Card[]) => {
    return [...deck, nightshroudCards.rollingAddTarget];
  },
  'Undo Add one rolling [Add Target] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudRollingAddTarget, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one (+1) [Invisible] card': (deck: Card[]) => {
    return [...deck, nightshroudCards.plus1Invisible];
  },
  'Undo Add one (+1) [Invisible] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudPlus1Invisible, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three rolling [Muddle] cards': (deck: Card[]) => {
    return [
      ...deck,
      nightshroudCards.rollingMuddle,
      nightshroudCards.rollingMuddle,
      nightshroudCards.rollingMuddle,
    ];
  },
  'Undo Add three rolling [Muddle] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudRollingMuddle, newDeck);
      removeCard(CardId.nightshroudRollingMuddle, newDeck);
      removeCard(CardId.nightshroudRollingMuddle, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Heal 1 Self] cards': (deck: Card[]) => {
    return [
      ...deck,
      nightshroudCards.rollingHeal1Self,
      nightshroudCards.rollingHeal1Self,
    ];
  },
  'Undo Add two rolling [Heal 1 Self] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudRollingHeal1Self, newDeck);
      removeCard(CardId.nightshroudRollingHeal1Self, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling [Curse] cards': (deck: Card[]) => {
    return [
      ...deck,
      nightshroudCards.rollingCurse,
      nightshroudCards.rollingCurse,
    ];
  },
  'Undo Add two rolling [Curse] cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudRollingCurse, newDeck);
      removeCard(CardId.nightshroudRollingCurse, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Replace one (-1) [Dark] card with one (+1) [Dark] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudMinus1Dark, newDeck, [
        nightshroudCards.plus1Dark,
      ]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Undo Replace one (-1) [Dark] card with one (+1) [Dark] card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.nightshroudPlus1Dark, newDeck, [
        nightshroudCards.minus1Dark,
      ]);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class Nightshroud implements Character {
  name = 'Nightshroud';
  image = 'assets/classes/Nightshroud/Nightshroud.png';
  icon = 'assets/classes/Nightshroud/Eclipse.png';
  health = [8, 9, 11, 12, 14, 15, 17, 18, 20];
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
      text: 'Add one (-1) [Dark] card',
      addAction: nightshroudActions['Add one (-1) [Dark] card'],
      removeAction: nightshroudActions['Undo Add one (-1) [Dark] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (-1) [Dark] card',
      addAction: nightshroudActions['Add one (-1) [Dark] card'],
      removeAction: nightshroudActions['Undo Add one (-1) [Dark] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) [Dark] card with one (+1) [Dark] card',
      addAction:
        nightshroudActions[
          'Replace one (-1) [Dark] card with one (+1) [Dark] card'
        ],
      removeAction:
        nightshroudActions[
          'Undo Replace one (-1) [Dark] card with one (+1) [Dark] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) [Dark] card with one (+1) [Dark] card',
      addAction:
        nightshroudActions[
          'Replace one (-1) [Dark] card with one (+1) [Dark] card'
        ],
      removeAction:
        nightshroudActions[
          'Undo Replace one (-1) [Dark] card with one (+1) [Dark] card'
        ],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Invisible] card',
      addAction: nightshroudActions['Add one (+1) [Invisible] card'],
      removeAction: nightshroudActions['Undo Add one (+1) [Invisible] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Invisible] card',
      addAction: nightshroudActions['Add one (+1) [Invisible] card'],
      removeAction: nightshroudActions['Undo Add one (+1) [Invisible] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
      addAction: nightshroudActions['Add three rolling [Muddle] cards'],
      removeAction: nightshroudActions['Undo Add three rolling [Muddle] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
      addAction: nightshroudActions['Add three rolling [Muddle] cards'],
      removeAction: nightshroudActions['Undo Add three rolling [Muddle] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: nightshroudActions['Add two rolling [Heal 1 Self] cards'],
      removeAction:
        nightshroudActions['Undo Add two rolling [Heal 1 Self] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
      addAction: nightshroudActions['Add two rolling [Curse] cards'],
      removeAction: nightshroudActions['Undo Add two rolling [Curse] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: nightshroudActions['Add one rolling [Add Target] card'],
      removeAction:
        nightshroudActions['Undo Add one rolling [Add Target] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add two (+1) cards',
      addAction:
        BasicPerkAction[
          'Ignore negative scenario effects and add one (+1) card'
        ],
      removeAction:
        BasicPerkAction[
          'Undo Ignore negative scenario effects and add one (+1) card'
        ],
    },
  ];
}
