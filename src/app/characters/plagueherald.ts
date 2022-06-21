import { Character, Perk } from './character';

export class Plagueherald implements Character {
  name = 'Plagueherald';
  health = 12;
  perks: Perk[] = [
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
    { name: 'Primary', completed: false, text: 'Add two (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Air] card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Air] card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Air] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Poison] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Immobilize] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add one (+1) card',
    },
  ];
}
