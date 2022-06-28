import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

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
  'Add three Rolling Poison': (deck: Card[]) => {
    return [
      ...deck,
      plagueheraldCards.rollingPoison,
      plagueheraldCards.rollingPoison,
      plagueheraldCards.rollingPoison,
    ];
  },
  'Add two Rolling Curse': (deck: Card[]) => {
    return [
      ...deck,
      plagueheraldCards.rollingCurse,
      plagueheraldCards.rollingCurse,
    ];
  },
  'Add two Rolling Immobilize': (deck: Card[]) => {
    return [
      ...deck,
      plagueheraldCards.rollingImmobilize,
      plagueheraldCards.rollingImmobilize,
    ];
  },
  'Add one Rolling Stun': (deck: Card[]) => {
    return [...deck, plagueheraldCards.rollingStun];
  },
};

export class Plagueherald implements Character {
  name = 'Plagueherald';
  health = 12;
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) card with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
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
      text: 'Replace one (+0) card with one (+2) card',
      addAction: BasicPerkAction['Replace one +0 with one +2 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two (+1) cards',
      addAction: BasicPerkAction['Add two +1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Air] card',
      addAction: PlagueheraldActions['Add one +1 Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Air] card',
      addAction: PlagueheraldActions['Add one +1 Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Air] card',
      addAction: PlagueheraldActions['Add one +1 Air card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Poison] cards',
      addAction: PlagueheraldActions['Add three Rolling Poison'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
      addAction: PlagueheraldActions['Add two Rolling Curse'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Immobilize] cards',
      addAction: PlagueheraldActions['Add two Rolling Immobilize'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: PlagueheraldActions['Add one Rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: PlagueheraldActions['Add one Rolling Stun'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add one (+1) card',
      addAction:
        BasicPerkAction[
          'Ignore negative scenario effects and add one (+1) card'
        ],
    },
  ];
}
