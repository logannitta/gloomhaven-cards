import { Character, Perk } from './character';

export class Scoundrel implements Character {
  name = 'Scoundrel';
  health = 8;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove four (+0) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) card with one (+0) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling (+1) cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Muddle] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Invisible] card',
    },
  ];
}
