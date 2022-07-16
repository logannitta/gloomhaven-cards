import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export class Voidwarden implements Character {
  name = 'Voidwarden';
  health = 12;
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
    },
    { name: 'Primary', completed: false, text: 'Remove one (-2) card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Dark] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Dark] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Ice] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) card with one (+1) [Ice] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+0) [Heal 1 Ally] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+0) [Heal 1 Ally] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 1 Ally] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 1 Ally] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 1 Ally] card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Poison] card' },
    { name: 'Primary', completed: false, text: 'Add one (+3) card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Curse] card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Curse] card' },
  ];
}
