import { CardId, Card, basicCards } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export const sunkeeperCards = {
  rollingHeal1Self: {
    img: 'assets/cards/sunkeeper/RollingHeal1Self.png',
    name: 'Rolling Heal 1 Self',
    id: CardId.sunkeeperRollingHeal1Self,
  },
  rollingLight: {
    img: 'assets/cards/sunkeeper/RollingLight.png',
    name: 'Rolling Light',
    id: CardId.sunkeeperRollingLight,
  },
  rollingStun: {
    img: 'assets/cards/sunkeeper/RollingStun.png',
    name: 'Rolling Stun',
    id: CardId.sunkeeperRollingStun,
  },
  rollingPlus1: {
    img: 'assets/cards/sunkeeper/RollingPlus1.png',
    name: 'Rolling Plus 1',
    id: CardId.sunkeeperRollingPlus1,
  },
  rollingShield1Self: {
    img: 'assets/cards/sunkeeper/RollingShield1Self.png',
    name: 'Rolling Shield 1 Self',
    id: CardId.sunkeeperRollingShield1Self,
  },
};

export const sunkeeperActions = {
  'Add two rolling [Heal 1 Self] cards': (deck: Card[]) => {
    return [
      ...deck,
      sunkeeperCards.rollingHeal1Self,
      sunkeeperCards.rollingHeal1Self,
    ];
  },
  'Add two rolling (+1) cards': (deck: Card[]) => {
    return [...deck, sunkeeperCards.rollingPlus1, sunkeeperCards.rollingPlus1];
  },
  'Add two rolling [Shield 1 Self] cards': (deck: Card[]) => {
    return [
      ...deck,
      sunkeeperCards.rollingShield1Self,
      sunkeeperCards.rollingShield1Self,
    ];
  },
  'Add two rolling [Light] cards': (deck: Card[]) => {
    return [...deck, sunkeeperCards.rollingLight, sunkeeperCards.rollingLight];
  },
  'Ignore negative item effects and add two (+1) cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },
  'Add one rolling [Stun] card': (deck: Card[]) => {
    return [...deck, sunkeeperCards.rollingStun];
  },
};

export class Sunkeeper implements Character {
  name = 'Sunkeeper';
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
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
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
      text: 'Replace one (+0) card with one (+2) card',
      addAction: BasicPerkAction['Replace one +0 with one +2 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: sunkeeperActions['Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
      addAction: sunkeeperActions['Add two rolling (+1) cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: sunkeeperActions['Add two rolling [Heal 1 Self] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: sunkeeperActions['Add two rolling [Heal 1 Self] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: sunkeeperActions['Add one rolling [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Light] cards',
      addAction: sunkeeperActions['Add two rolling [Light] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Light] cards',
      addAction: sunkeeperActions['Add two rolling [Light] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Shield 1 Self] cards',
      addAction: sunkeeperActions['Add two rolling [Shield 1 Self] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add two (+1) cards',
      addAction:
        sunkeeperActions['Ignore negative item effects and add two (+1) cards'],
    },
  ];
}
