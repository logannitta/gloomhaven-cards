import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const cragheartCards = {
  rollingPush2: {
    img: 'assets/cards/cragheart/RollingPush2.png',
    damage: 0,
    name: 'Rolling Push 2',
    id: CardId.cragheartRollingPush2,
  },
  rollingEarth: {
    img: 'assets/cards/cragheart/RollingEarth.png',
    name: 'Rolling Earth',
    id: CardId.cragheartRollingEarth,
  },
  rollingAir: {
    img: 'assets/cards/cragheart/RollingAir.png',
    name: 'Rolling Air',
    id: CardId.cragheartRollingAir,
  },
  plus2Muddle: {
    img: 'assets/cards/cragheart/Plus2Muddle.png',
    name: 'Plus 2 Muddle',
    id: CardId.cragheartPlus2Muddle,
  },
  plus1Immobilize: {
    img: 'assets/cards/cragheart/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.cragheartPlus1Immobilize,
  },
};

export const cragheartActions = {
  'Add two Rolling Push 2': (deck: Card[]) => {
    return [...deck, cragheartCards.rollingPush2, cragheartCards.rollingPush2];
  },
  'Undo Add two Rolling Push 2': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.cragheartRollingPush2, newDeck);
    removeCard(CardId.cragheartRollingPush2, newDeck);
    return newDeck;
  },
  'Add two Rolling earth': (deck: Card[]) => {
    return [...deck, cragheartCards.rollingEarth, cragheartCards.rollingEarth];
  },
  'Undo Add two Rolling earth': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.cragheartRollingEarth, newDeck);
    removeCard(CardId.cragheartRollingEarth, newDeck);
    return newDeck;
  },
  'Add two Rolling air': (deck: Card[]) => {
    return [...deck, cragheartCards.rollingAir, cragheartCards.rollingAir];
  },
  'Undo Add two Rolling air': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.cragheartRollingAir, newDeck);
    removeCard(CardId.cragheartRollingAir, newDeck);
    return newDeck;
  },
  'Add one +1 immobilize': (deck: Card[]) => {
    return [...deck, cragheartCards.plus1Immobilize];
  },
  'Undo Add one +1 immobilize': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.cragheartPlus1Immobilize, newDeck);
    return newDeck;
  },
  'Add one +2 muddle': (deck: Card[]) => {
    return [...deck, cragheartCards.plus2Muddle];
  },
  'Undo Add one +2 muddle': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.cragheartPlus2Muddle, newDeck);
    return newDeck;
  },
  'Add one -2 and two +2': (deck: Card[]) => {
    return [...deck, basicCards.minus2, basicCards.plus2, basicCards.plus2];
  },
  'Undo Add one -2 and two +2': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus2, newDeck);
    removeCard(CardId.plus2, newDeck);
    removeCard(CardId.plus2, newDeck);
    return newDeck;
  },
};

export class Cragheart implements Character {
  name = 'Cragheart';
  health = 8;
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
      text: 'Add one (-2) cards and two (+2) cards',
      addAction: cragheartActions['Add one -2 and two +2'],
      removeAction: cragheartActions['Undo Add one -2 and two +2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: cragheartActions['Add one +1 immobilize'],
      removeAction: cragheartActions['Undo Add one +1 immobilize'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: cragheartActions['Add one +1 immobilize'],
      removeAction: cragheartActions['Undo Add one +1 immobilize'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Muddle] card',
      addAction: cragheartActions['Add one +2 muddle'],
      removeAction: cragheartActions['Undo Add one +2 muddle'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Muddle] card',
      addAction: cragheartActions['Add one +2 muddle'],
      removeAction: cragheartActions['Undo Add one +2 muddle'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Push 2] cards',
      addAction: cragheartActions['Add two Rolling Push 2'],
      removeAction: cragheartActions['Undo Add two Rolling Push 2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Earth] cards',
      addAction: cragheartActions['Add two Rolling earth'],
      removeAction: cragheartActions['Undo Add two Rolling earth'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Earth] cards',
      addAction: cragheartActions['Add two Rolling earth'],
      removeAction: cragheartActions['Undo Add two Rolling earth'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Air] cards',
      addAction: cragheartActions['Add two Rolling air'],
      removeAction: cragheartActions['Undo Add two Rolling air'],
    },
  ];
}
