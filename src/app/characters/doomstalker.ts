import { Character, Perk } from './character';

export class Doomstalker implements Character {
  name = 'Doomstalker';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with two (+1) cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with two (+1) cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with two (+1) cards',
    },
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Muddle] card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Poison] card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Wound] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+0) [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
    },
  ];
}
