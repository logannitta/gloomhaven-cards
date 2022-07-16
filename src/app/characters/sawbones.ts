import { CardId, Card } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export const sawbonesCards = {
  plus0RefreshItem: {
    img: 'assets/cards/sawbones/Plus0RefreshItem.png',
    name: 'Plus 0 Refresh Item',
    id: CardId.sawbonesPlus0RefreshItem,
  },
  plus1Immobilize: {
    img: 'assets/cards/sawbones/Plus1Immobilize.png',
    name: 'Plus 1 Immobilize',
    id: CardId.sawbonesPlus1Immobilize,
  },
  rollingHeal3Self: {
    img: 'assets/cards/sawbones/RollingHeal3Self.png',
    name: 'Rolling Heal 3 Self',
    id: CardId.sawbonesRollingHeal3Self,
  },
  rollingPlus2: {
    img: 'assets/cards/sawbones/RollingPlus2.png',
    name: 'Rolling Plus 2',
    id: CardId.sawbonesRollingPlus2,
  },
  rollingStun: {
    img: 'assets/cards/sawbones/RollingStun.png',
    name: 'Rolling Stun',
    id: CardId.sawbonesRollingStun,
  },
  rollingWound: {
    img: 'assets/cards/sawbones/RollingWound.png',
    name: 'Rolling Wound',
    id: CardId.sawbonesRollingWound,
  },
};

export const sawbonesActions = {
  'Add one rolling (+0) [Refresh an Item] card': (deck: Card[]) => {
    return [...deck, sawbonesCards.plus0RefreshItem];
  },
  'Add one rolling (+2) card': (deck: Card[]) => {
    return [...deck, sawbonesCards.rollingPlus2];
  },
  'Add one (+1) [Immobilize] card': (deck: Card[]) => {
    return [...deck, sawbonesCards.plus1Immobilize];
  },
  'Add one rolling [Stun] card': (deck: Card[]) => {
    return [...deck, sawbonesCards.rollingStun];
  },
  'Add one rolling [Heal 3 Self] card': (deck: Card[]) => {
    return [...deck, sawbonesCards.rollingHeal3Self];
  },
  'Add two rolling [Wound] cards': (deck: Card[]) => {
    return [...deck, sawbonesCards.rollingWound, sawbonesCards.rollingWound];
  },
};

export class Sawbones implements Character {
  name = 'Sawbones';
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
      text: 'Add one rolling (+2) card',
      addAction: sawbonesActions['Add one rolling (+2) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling (+2) card',
      addAction: sawbonesActions['Add one rolling (+2) card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: sawbonesActions['Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
      addAction: sawbonesActions['Add one (+1) [Immobilize] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
      addAction: sawbonesActions['Add two rolling [Wound] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
      addAction: sawbonesActions['Add two rolling [Wound] cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Stun] card',
      addAction: sawbonesActions['Add one rolling [Stun] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Heal 3 Self] card',
      addAction: sawbonesActions['Add one rolling [Heal 3 Self] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Heal 3 Self] card',
      addAction: sawbonesActions['Add one rolling [Heal 3 Self] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling (+0) [Refresh an Item] card',
      addAction: sawbonesActions['Add one rolling (+0) [Refresh an Item] card'],
    },
  ];
}
