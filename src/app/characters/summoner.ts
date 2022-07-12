import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export const summonerCards = {
  rollingAir: {
    img: 'assets/cards/summoner/RollingAir.png',
    name: 'Rolling Air',
    id: CardId.summonerRollingAir,
  },
  Plus2: {
    img: 'assets/cards/summoner/Plus2.png',
    name: 'Plus 2',
    id: CardId.summonerPlus2,
  },
  rollingDark: {
    img: 'assets/cards/summoner/RollingDark.png',
    name: 'Rolling Dark',
    id: CardId.summonerRollingDark,
  },
  rollingEarth: {
    img: 'assets/cards/summoner/RollingEarth.png',
    name: 'Rolling Earth',
    id: CardId.summonerRollingEarth,
  },
  rollingFire: {
    img: 'assets/cards/summoner/RollingFire.png',
    name: 'Rolling Fire',
    id: CardId.summonerRollingFire,
  },
  rollingPoison: {
    img: 'assets/cards/summoner/RollingPoison.png',
    name: 'Rolling Poison',
    id: CardId.summonerRollingPoison,
  },
  rollingWound: {
    img: 'assets/cards/summoner/RollingWound.png',
    name: 'Rolling Wound',
    id: CardId.summonerRollingWound,
  },
  rollingHeal1Self: {
    img: 'assets/cards/summoner/RollingHeal1Self.png',
    name: 'Rolling Heal 1 Self',
    id: CardId.summonerRollingHeal1Self,
  },
};

export const summonerActions = {
  'Add one plus 2': (deck: Card[]) => {
    return [...deck, summonerCards.Plus2];
  },
  'Add one rolling fire and one rolling air': (deck: Card[]) => {
    return [...deck, summonerCards.rollingAir, summonerCards.rollingFire];
  },
  'Add one rolling dark and one rolling earth': (deck: Card[]) => {
    return [...deck, summonerCards.rollingDark, summonerCards.rollingEarth];
  },
  'Add two rolling wound': (deck: Card[]) => {
    return [...deck, summonerCards.rollingWound, summonerCards.rollingWound];
  },
  'Add two rolling poison': (deck: Card[]) => {
    return [...deck, summonerCards.rollingPoison, summonerCards.rollingPoison];
  },
  'Add two rolling heal 1 self': (deck: Card[]) => {
    return [
      ...deck,
      summonerCards.rollingHeal1Self,
      summonerCards.rollingHeal1Self,
    ];
  },
};

export class Summoner implements Character {
  name = 'Summoner';
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
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) card',
      addAction: summonerActions['Add one plus 2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) card',
      addAction: summonerActions['Add one plus 2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
      addAction: summonerActions['Add two rolling wound'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] cards',
      addAction: summonerActions['Add two rolling poison'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: summonerActions['Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: summonerActions['Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: summonerActions['Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Fire] card and one rolling [Air] card',
      addAction: summonerActions['Add one rolling fire and one rolling air'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Dark] card and one rolling [Earth] card',
      addAction: summonerActions['Add one rolling dark and one rolling earth'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add two (+1) cards',
      addAction:
        BasicPerkAction[
          'Ignore negative scenario effects and add one (+1) card'
        ],
    },
  ];
}
