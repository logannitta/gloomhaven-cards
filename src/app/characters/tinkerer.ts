import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export const tinkererCards = {
  rollingFire: {
    img: 'assets/cards/tinkerer/RollingFire.png',
    name: 'Rolling Fire',
    id: CardId.tinkererRollingFire,
  },
  rollingMuddle: {
    img: 'assets/cards/tinkerer/RollingMuddle.png',
    name: 'Rolling Muddle',
    id: CardId.tinkererRollingMuddle,
  },
  plus3: {
    img: 'assets/cards/tinkerer/Plus3.png',
    name: 'Plus 3',
    id: CardId.tinkererPlus3,
  },
  plus1Wound: {
    img: 'assets/cards/tinkerer/Plus1Wound.png',
    name: 'Plus 1 Wound',
    id: CardId.tinkererPlus1Wound,
  },
  plus1Immobilize: {
    img: 'assets/cards/tinkerer/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.tinkererPlus1Immobilize,
  },
  plus1Heal2Self: {
    img: 'assets/cards/tinkerer/Plus1Heal2Self.png',
    name: 'Plus 1 Heal 2 Self',
    id: CardId.tinkererPlus1Heal2Self,
  },
  plus0AddTarget: {
    img: 'assets/cards/tinkerer/Plus0AddTarget.png',
    name: 'Plus 0 Add Target',
    id: CardId.tinkererPlus0AddTarget,
  },
};

export const tinkererActions = {
  'Add two rolling [Fire] cards': (deck: Card[]) => {
    return [...deck, tinkererCards.rollingFire, tinkererCards.rollingFire];
  },
  'Add three rolling [Muddle] cards': (deck: Card[]) => {
    return [
      ...deck,
      tinkererCards.rollingMuddle,
      tinkererCards.rollingMuddle,
      tinkererCards.rollingMuddle,
    ];
  },
  'Add two (+1) cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },
  'Add one (+3) card': (deck: Card[]) => {
    return [...deck, tinkererCards.plus3];
  },
  'Add one (+1) [Wound] card': (deck: Card[]) => {
    return [...deck, tinkererCards.plus1Wound];
  },
  'Add one (+1) [Immobilize] card': (deck: Card[]) => {
    return [...deck, tinkererCards.plus1Immobilize];
  },
  'Add one (+1) [Heal 2 Self] card': (deck: Card[]) => {
    return [...deck, tinkererCards.plus1Heal2Self];
  },
  'Add one (+0) [Add Target] card': (deck: Card[]) => {
    return [...deck, tinkererCards.plus0AddTarget];
  },
};

export class Tinkerer implements Character {
  name = 'Tinkerer';
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
      text: 'Replace one (-2) card with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: tinkererActions['Add two (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+3) card',
      addAction: tinkererActions['Add one (+3) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Fire] cards',
      addAction: tinkererActions['Add two rolling [Fire] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
      addAction: tinkererActions['Add three rolling [Muddle] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: tinkererActions['Add one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Wound] card',
      addAction: tinkererActions['Add one (+1) [Wound] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: tinkererActions['Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: tinkererActions['Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 2 Self] card',
      addAction: tinkererActions['Add one (+1) [Heal 2 Self] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 2 Self] card',
      addAction: tinkererActions['Add one (+1) [Heal 2 Self] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Add Target] card',
      addAction: tinkererActions['Add one (+0) [Add Target] card'],
    },
  ];
}
