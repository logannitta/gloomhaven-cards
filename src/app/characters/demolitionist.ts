import { Character, Perk } from './character';

export class Demolitionist implements Character {
  name = 'Demolitionist';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove four (+0) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove one (-2) card and one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Muddle] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Muddle] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+0) [Poison] card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+2)' },
    { name: 'Primary', completed: false, text: 'Add one (+2)' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Earth] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Earth] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Fire] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Fire] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [All adjacent enemies suffer 1 damage]',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [All adjacent enemies suffer 1 damage]',
    },
  ];
}
