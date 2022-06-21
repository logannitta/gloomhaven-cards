import { Character, Perk } from './character';

export class Summoner implements Character {
  name = 'Summoner';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
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
      text: 'Replace one (-1) card with one (+1) card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+2) card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Wound] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Poison] cards',
    },
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
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Fire] card and one rolling [Air] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Dark] card and one rolling [Earth] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add two (+1) cards',
    },
  ];
}
