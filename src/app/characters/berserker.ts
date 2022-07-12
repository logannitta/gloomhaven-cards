import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const berserkerCards = {
  plus2Fire: {
    img: 'assets/cards/berserker/Plus2Fire.png',
    name: 'Plus 3',
    id: CardId.berserkerPlus2Fire,
  },
  rollingHeal1Self: {
    img: 'assets/cards/berserker/RollingHeal1Self.png',
    name: 'Rolling Heal 1 Self',
    id: CardId.berserkerRollingHeal1Self,
  },
  rollingPlus1Disarm: {
    img: 'assets/cards/berserker/RollingPlus1Disarm.png',
    name: 'Rolling Plus 1 Disarm',
    id: CardId.berserkerRollingPlus1Disarm,
  },
  rollingPlus2: {
    img: 'assets/cards/berserker/RollingPlus2.png',
    name: 'Rolling Plus 2',
    id: CardId.berserkerRollingPlus2,
  },
  rollingStun: {
    img: 'assets/cards/berserker/RollingStun.png',
    name: 'Rolling Stun',
    id: CardId.berserkerRollingStun,
  },
  rollingWound: {
    img: 'assets/cards/berserker/RollingWound.png',
    name: 'Rolling Wound',
    id: CardId.berserkerRollingWound,
  },
};

export const berserkerActions = {
  'Add one plus 2 fire': (deck: Card[]) => {
    return [...deck, berserkerCards.plus2Fire];
  },
  'Add two rolling wound': (deck: Card[]) => {
    return [...deck, berserkerCards.rollingWound, berserkerCards.rollingWound];
  },
  'Add one rolling stun': (deck: Card[]) => {
    return [...deck, berserkerCards.rollingStun];
  },
  'Add one rolling plus 2': (deck: Card[]) => {
    return [...deck, berserkerCards.rollingStun];
  },
  'Add one rolling plus 1 disarm': (deck: Card[]) => {
    return [...deck, berserkerCards.rollingPlus1Disarm];
  },
  'Add two rolling heal 1 self': (deck: Card[]) => {
    return [
      ...deck,
      berserkerCards.rollingHeal1Self,
      berserkerCards.rollingHeal1Self,
    ];
  },
  'Replace +0 with rolling +2': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [berserkerCards.rollingPlus2]);
    return newDeck;
  },
};

export class Berserker implements Character {
  name = 'Berserker';
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
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) cards with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) cards with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one rolling (+2) card',
      addAction: berserkerActions['Replace +0 with rolling +2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one rolling (+2) card',
      addAction: berserkerActions['Replace +0 with rolling +2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
      addAction: berserkerActions['Add two rolling wound'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
      addAction: berserkerActions['Add two rolling wound'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: berserkerActions['Add one rolling stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: berserkerActions['Add one rolling stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling (+1) [Disarm] card',
      addAction: berserkerActions['Add one rolling plus 1 disarm'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: berserkerActions['Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Fire] card',
      addAction: berserkerActions['Add one plus 2 fire'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Fire] card',
      addAction: berserkerActions['Add one plus 2 fire'],
    },
  ];
}
