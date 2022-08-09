import { Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

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
  'Undo Add one plus 2': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.summonerPlus2, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling fire and one rolling air': (deck: Card[]) => {
    return [...deck, summonerCards.rollingAir, summonerCards.rollingFire];
  },
  'Undo Add one rolling fire and one rolling air': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.summonerRollingAir, newDeck);
      removeCard(CardId.summonerRollingFire, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add one rolling dark and one rolling earth': (deck: Card[]) => {
    return [...deck, summonerCards.rollingDark, summonerCards.rollingEarth];
  },
  'Undo Add one rolling dark and one rolling earth': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.summonerRollingDark, newDeck);
      removeCard(CardId.summonerRollingEarth, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling wound': (deck: Card[]) => {
    return [...deck, summonerCards.rollingWound, summonerCards.rollingWound];
  },
  'Undo Add two rolling wound': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.summonerRollingWound, newDeck);
      removeCard(CardId.summonerRollingWound, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling poison': (deck: Card[]) => {
    return [...deck, summonerCards.rollingPoison, summonerCards.rollingPoison];
  },
  'Undo Add two rolling poison': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.summonerRollingPoison, newDeck);
      removeCard(CardId.summonerRollingPoison, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Add two rolling heal 1 self': (deck: Card[]) => {
    return [
      ...deck,
      summonerCards.rollingHeal1Self,
      summonerCards.rollingHeal1Self,
    ];
  },
  'Undo Add two rolling heal 1 self': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.summonerRollingHeal1Self, newDeck);
      removeCard(CardId.summonerRollingHeal1Self, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
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
      removeAction: BasicPerkAction['Undo Remove two -1 cards'],
    },
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
      text: 'Add one (+2) card',
      addAction: summonerActions['Add one plus 2'],
      removeAction: summonerActions['Undo Add one plus 2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) card',
      addAction: summonerActions['Add one plus 2'],
      removeAction: summonerActions['Undo Add one plus 2'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
      addAction: summonerActions['Add two rolling wound'],
      removeAction: summonerActions['Undo Add two rolling wound'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] cards',
      addAction: summonerActions['Add two rolling poison'],
      removeAction: summonerActions['Undo Add two rolling poison'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: summonerActions['Add two rolling heal 1 self'],
      removeAction: summonerActions['Undo Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: summonerActions['Add two rolling heal 1 self'],
      removeAction: summonerActions['Undo Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
      addAction: summonerActions['Add two rolling heal 1 self'],
      removeAction: summonerActions['Undo Add two rolling heal 1 self'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Fire] card and one rolling [Air] card',
      addAction: summonerActions['Add one rolling fire and one rolling air'],
      removeAction:
        summonerActions['Undo Add one rolling fire and one rolling air'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Dark] card and one rolling [Earth] card',
      addAction: summonerActions['Add one rolling dark and one rolling earth'],
      removeAction:
        summonerActions['Undo Add one rolling dark and one rolling earth'],
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
