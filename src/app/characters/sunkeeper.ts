import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

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
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Light] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Light] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Shield 1 Self] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add two (+1) cards',
    },
  ];
}
