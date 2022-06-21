import { Character, Perk } from './character';

export class Mindthief implements Character {
  name = 'Mindthief';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove four (+0) cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with two (+2) cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) card with one (+0) card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Ice] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Ice] card' },
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Pull 1] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Immobilize] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
    },
  ];
}
