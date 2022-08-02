import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const beastTyrantCards = {
  plus1Immobilize: {
    img: 'assets/cards/beasttyrant/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.beastTyrantPlus1Immobilize,
  },
  plus1Wound: {
    img: 'assets/cards/beasttyrant/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.beastTyrantPlus1Wound,
  },
  rollingEarth: {
    img: 'assets/cards/beasttyrant/RollingEarth.png',
    name: 'Rolling Earth',
    id: CardId.beastTyrantRollingEarth,
  },
  rollingHeal1Self: {
    img: 'assets/cards/beasttyrant/RollingHeal1Self.png',
    name: 'Rolling Heal 1 Self',
    id: CardId.beastTyrantRollingHeal1Self,
  },
};

export const beastTyrantActions = {
  'Add one +1 immobilize card': (deck: Card[]) => {
    return [...deck, beastTyrantCards.plus1Immobilize];
  },
  'Undo Add one +1 immobilize card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.beastTyrantPlus1Immobilize, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one +1 wound card': (deck: Card[]) => {
    return [...deck, beastTyrantCards.plus1Wound];
  },
  'Undo Add one +1 wound card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.beastTyrantPlus1Wound, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling earth cards': (deck: Card[]) => {
    return [
      ...deck,
      beastTyrantCards.rollingEarth,
      beastTyrantCards.rollingEarth,
    ];
  },
  'Undo Add two rolling earth cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.beastTyrantRollingEarth, newDeck);
      removeCard(CardId.beastTyrantRollingEarth, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling heal 1 self cards': (deck: Card[]) => {
    return [
      ...deck,
      beastTyrantCards.rollingHeal1Self,
      beastTyrantCards.rollingHeal1Self,
    ];
  },
  'Undo Add two rolling heal 1 self cards': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.beastTyrantRollingHeal1Self, newDeck);
      removeCard(CardId.beastTyrantRollingHeal1Self, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class BeastTyrant implements Character {
  name = 'Beast Tyrant';
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
      text: 'Add one (+1) [Wound] card',
      addAction: beastTyrantActions['Add one +1 wound card'],
      removeAction: beastTyrantActions['Undo Add one +1 wound card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: beastTyrantActions['Add one +1 wound card'],
      removeAction: beastTyrantActions['Undo Add one +1 wound card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: beastTyrantActions['Add one +1 immobilize card'],
      removeAction: beastTyrantActions['Undo Add one +1 immobilize card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: beastTyrantActions['Add one +1 immobilize card'],
      removeAction: beastTyrantActions['Undo Add one +1 immobilize card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: beastTyrantActions['Add two rolling heal 1 self cards'],
      removeAction:
        beastTyrantActions['Undo Add two rolling heal 1 self cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: beastTyrantActions['Add two rolling heal 1 self cards'],
      removeAction:
        beastTyrantActions['Undo Add two rolling heal 1 self cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: beastTyrantActions['Add two rolling heal 1 self cards'],
      removeAction:
        beastTyrantActions['Undo Add two rolling heal 1 self cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Earth] cards',
      addAction: beastTyrantActions['Add two rolling earth cards'],
      removeAction: beastTyrantActions['Undo Add two rolling earth cards'],
    },
  ];
}
