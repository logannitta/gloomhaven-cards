import { Character, Perk } from './character';

export class Elementalist implements Character {
  name = 'Elementalist';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
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
    { name: 'Primary', completed: false, text: 'Add three (+0) [Fire] cards' },
    { name: 'Primary', completed: false, text: 'Add three (+0) [Ice] cards' },
    { name: 'Primary', completed: false, text: 'Add three (+0) [Air] cards' },
    { name: 'Primary', completed: false, text: 'Add three (+0) [Earth] cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air] card',
    },
    { name: 'Primary', completed: false, text: 'Add two (+1) [Push 1] cards' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Wound] card' },
    { name: 'Primary', completed: false, text: 'Add one (+0) [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Add Target] card',
    },
  ];
}
