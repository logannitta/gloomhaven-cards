import { Character, Perk } from './character';

export class Nightshroud implements Character {
  name = 'Nightshroud';
  health = 12;
  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    { name: 'Primary', completed: false, text: 'Remove four (+0) cards' },
    { name: 'Primary', completed: false, text: 'Add one (-1) [Dark] card' },
    { name: 'Primary', completed: false, text: 'Add one (-1) [Dark] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) [Dark] card with one (+1) [Dark] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) [Dark] card with one (+1) [Dark] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Invisible] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Invisible] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
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
      text: 'Add one rolling [Add Target] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects and add two (+1) cards',
    },
  ];
}
