import { Character, Perk } from './character';

export class Diviner implements Character {
  name = 'Diviner';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove one (-2) card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Shield 1 Ally] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Dark] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Light] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+3) [Light] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Curse] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+2) [Regenerate Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) [Heal 2 Ally] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Heal 1 Self] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add two (+1) cards',
    },
  ];
}
