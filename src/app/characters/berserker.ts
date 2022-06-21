import { Character, Perk } from './character';

export class Berserker implements Character {
  name = 'Berserker';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove four (+0) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) cards with one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) cards with one (+1) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) card',
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
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling (+1) [Disarm] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Fire] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Fire] card' },
  ];
}
