import { Character, Perk } from './character';

export class Cragheart implements Character {
  name = 'Cragheart';
  health = 8;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove four (+0) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (-2) cards and two (+2) cards',
    },
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
    { name: 'Primary', completed: false, text: 'Add one (+2) [Muddle] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Muddle] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Push 2] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Earth] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Earth] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Air] cards',
    },
  ];
}
