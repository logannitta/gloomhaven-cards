import { Character, Perk } from './character';

export class Quartermaster implements Character {
  name = 'Quartermaster';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove four (+0) cards',
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
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add two rolling (+1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Refresh Item] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Refresh Item] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Refresh Item] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add two (+1) cards',
    },
  ];
}
