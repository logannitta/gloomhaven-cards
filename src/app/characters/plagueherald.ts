import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const plagueheraldCards = {
  plus1Air: {
    img: 'assets/cards/plagueherald/Plus1Air.png',
    damage: 0,
    name: 'Plus 1 Air',
    id: CardId.plagueheraldAirPlus1,
  },
  rollingPoison: {
    img: 'assets/cards/plagueherald/RollingPoison.png',
    damage: 0,
    name: 'Rolling Poison',
    id: CardId.plagueheraldRollingPoison,
  },
  rollingCurse: {
    img: 'assets/cards/plagueherald/RollingCurse.png',
    damage: 0,
    name: 'Rolling Curse',
    id: CardId.plagueheraldRollingCurse,
  },
  rollingImmobilize: {
    img: 'assets/cards/plagueherald/RollingImmobilize.png',
    damage: 0,
    name: 'Rolling Immobilize',
    id: CardId.plagueheraldRollingImmobilize,
  },
  rollingStun: {
    img: 'assets/cards/plagueherald/RollingStun.png',
    damage: 0,
    name: 'Rolling Stun',
    id: CardId.plagueheraldRollingStun,
  },
};

export const PlagueheraldActions = {
  'Add one +1 Air card': (deck: Card[]) => {
    return [...deck, plagueheraldCards.plus1Air];
  },
  'Undo Add one +1 Air card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plagueheraldAirPlus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three Rolling Poison': (deck: Card[]) => {
    return [
      ...deck,
      plagueheraldCards.rollingPoison,
      plagueheraldCards.rollingPoison,
      plagueheraldCards.rollingPoison,
    ];
  },
  'Undo Add three Rolling Poison': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plagueheraldRollingPoison, newDeck);
      removeCard(CardId.plagueheraldRollingPoison, newDeck);
      removeCard(CardId.plagueheraldRollingPoison, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two Rolling Curse': (deck: Card[]) => {
    return [
      ...deck,
      plagueheraldCards.rollingCurse,
      plagueheraldCards.rollingCurse,
    ];
  },
  'Undo Add two Rolling Curse': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plagueheraldRollingCurse, newDeck);
      removeCard(CardId.plagueheraldRollingCurse, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two Rolling Immobilize': (deck: Card[]) => {
    return [
      ...deck,
      plagueheraldCards.rollingImmobilize,
      plagueheraldCards.rollingImmobilize,
    ];
  },
  'Undo Add two Rolling Immobilize': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plagueheraldRollingImmobilize, newDeck);
      removeCard(CardId.plagueheraldRollingImmobilize, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one Rolling Stun': (deck: Card[]) => {
    return [...deck, plagueheraldCards.rollingStun];
  },
  'Undo Add one Rolling Stun': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.plagueheraldRollingStun, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class Plagueherald implements Character {
  name = 'Plagueherald';
  image = 'assets/classes/Plagueherald/Plagueheraldimg.png';
  icon = 'assets/classes/Plagueherald/Cthulu.png';
  health = [12];
  perks: Perk[] = [
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
      removeAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Replace one -1 with one +1 card'],
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
      text: 'Add two (+1) cards',
      addAction: BasicPerkAction['Add two +1 cards'],
      removeAction: BasicPerkAction['Undo Add two +1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Air] card',
      addAction: PlagueheraldActions['Add one +1 Air card'],
      removeAction: PlagueheraldActions['Undo Add one +1 Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Air] card',
      addAction: PlagueheraldActions['Add one +1 Air card'],
      removeAction: PlagueheraldActions['Undo Add one +1 Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Air] card',
      addAction: PlagueheraldActions['Add one +1 Air card'],
      removeAction: PlagueheraldActions['Undo Add one +1 Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Poison] cards',
      addAction: PlagueheraldActions['Add three Rolling Poison'],
      removeAction: PlagueheraldActions['Undo Add three Rolling Poison'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
      addAction: PlagueheraldActions['Add two Rolling Curse'],
      removeAction: PlagueheraldActions['Undo Add two Rolling Curse'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Immobilize] cards',
      addAction: PlagueheraldActions['Add two Rolling Immobilize'],
      removeAction: PlagueheraldActions['Undo Add two Rolling Immobilize'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: PlagueheraldActions['Add one Rolling Stun'],
      removeAction: PlagueheraldActions['Undo Add one Rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: PlagueheraldActions['Add one Rolling Stun'],
      removeAction: PlagueheraldActions['Undo Add one Rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add one (+1) card',
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
