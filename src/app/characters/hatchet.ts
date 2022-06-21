import { Character, Perk } from './character';

export class Hatchet implements Character {
  name = 'Hatchet';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Muddle] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Poison] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Wound] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Push 2] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+0) [Stun] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+1) [Stun] card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+2) Air card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) Air card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) Air card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) with one (+3) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) with one (+3) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) with one (+3) card',
    },
  ];
}
