import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const quartermasterCards = {
  plus0RefreshItem: {
    img: 'assets/cards/quartermaster/Plus0RefreshItem.png',
    name: 'Plus 0 Refresh Item',
    id: CardId.quartermasterPlus0RefreshItem,
  },
  rollingAddTarget: {
    img: 'assets/cards/quartermaster/RollingAddTarget.png',
    name: 'Rolling Add Target',
    id: CardId.quartermasterRollingAddTarget,
  },
  rollingMuddle: {
    img: 'assets/cards/quartermaster/RollingMuddle.png',
    name: 'Rolling Muddle',
    id: CardId.quartermasterRollingMuddle,
  },
  rollingPierce3: {
    img: 'assets/cards/quartermaster/RollingPierce3.png',
    name: 'Rolling Pierce 3',
    id: CardId.quartermasterRollingPierce3,
  },
  rollingPlus1: {
    img: 'assets/cards/quartermaster/RollingPlus1.png',
    name: 'Rolling Plus 1',
    id: CardId.quartermasterRollingPlus1,
  },
  rollingStun: {
    img: 'assets/cards/quartermaster/RollingStun.png',
    name: 'Rolling Stun',
    id: CardId.quartermasterRollingStun,
  },
};

export const quartermasterActions = {
  'Add one plus 0 refresh item': (deck: Card[]) => {
    return [...deck, quartermasterCards.plus0RefreshItem];
  },
  'Undo Add one plus 0 refresh item': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.quartermasterPlus0RefreshItem, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling stun': (deck: Card[]) => {
    return [...deck, quartermasterCards.rollingStun];
  },
  'Undo Add one rolling stun': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.quartermasterRollingStun, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling add target': (deck: Card[]) => {
    return [...deck, quartermasterCards.rollingAddTarget];
  },
  'Undo Add one rolling add target': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.quartermasterRollingAddTarget, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling plus 1': (deck: Card[]) => {
    return [
      ...deck,
      quartermasterCards.rollingPlus1,
      quartermasterCards.rollingPlus1,
    ];
  },
  'Undo Add two rolling plus 1': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.quartermasterRollingPlus1, newDeck);
      removeCard(CardId.quartermasterRollingPlus1, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling pierce 3': (deck: Card[]) => {
    return [
      ...deck,
      quartermasterCards.rollingPierce3,
      quartermasterCards.rollingPierce3,
    ];
  },
  'Undo Add two rolling pierce 3': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.quartermasterRollingPierce3, newDeck);
      removeCard(CardId.quartermasterRollingPierce3, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add three rolling muddle': (deck: Card[]) => {
    return [
      ...deck,
      quartermasterCards.rollingMuddle,
      quartermasterCards.rollingMuddle,
      quartermasterCards.rollingMuddle,
    ];
  },
  'Undo Add three rolling muddle': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.quartermasterRollingMuddle, newDeck);
      removeCard(CardId.quartermasterRollingMuddle, newDeck);
      removeCard(CardId.quartermasterRollingMuddle, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
};

export class Quartermaster implements Character {
  name = 'Quartermaster';
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
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
      removeAction: BasicPerkAction['Undo Remove four +0 cards'],
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
      addAction: quartermasterActions['Add two rolling plus 1'],
      removeAction: quartermasterActions['Undo Add two rolling plus 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: quartermasterActions['Add two rolling plus 1'],
      removeAction: quartermasterActions['Undo Add two rolling plus 1'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
      addAction: quartermasterActions['Add three rolling muddle'],
      removeAction: quartermasterActions['Undo Add three rolling muddle'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
      addAction: quartermasterActions['Add two rolling pierce 3'],
      removeAction: quartermasterActions['Undo Add two rolling pierce 3'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: quartermasterActions['Add one rolling stun'],
      removeAction: quartermasterActions['Undo Add one rolling stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
      addAction: quartermasterActions['Add one rolling add target'],
      removeAction: quartermasterActions['Undo Add one rolling add target'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Refresh Item] card',
      addAction: quartermasterActions['Add one plus 0 refresh item'],
      removeAction: quartermasterActions['Undo Add one plus 0 refresh item'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Refresh Item] card',
      addAction: quartermasterActions['Add one plus 0 refresh item'],
      removeAction: quartermasterActions['Undo Add one plus 0 refresh item'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Refresh Item] card',
      addAction: quartermasterActions['Add one plus 0 refresh item'],
      removeAction: quartermasterActions['Undo Add one plus 0 refresh item'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add two (+1) cards',
      addAction:
        BasicPerkAction['Ignore negative item effects and add one (+1) card'],
      removeAction:
        BasicPerkAction[
          'Undo Ignore negative item effects and add one (+1) card'
        ],
    },
  ];
}
