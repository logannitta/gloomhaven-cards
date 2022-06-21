import { Character, Perk } from './character';

export class RedGuard implements Character {
  name = 'Red Guard';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove four (+0) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove one (-2) card and one (+1) card',
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
      text: 'Replace one (+1) card with one (+2) [Light] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+1) card with one (+2) [Light] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Fire and Light] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Fire and Light] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Wound] card',
    },
  ];
}
