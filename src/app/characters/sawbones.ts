import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

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
    { name: 'Primary', completed: false, text: 'Add one rolling (+2) card' },
    { name: 'Primary', completed: false, text: 'Add one rolling (+2) card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Heal 3 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Heal 3 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling (+0) [Refresh an Item] card',
    },
  ];
}
