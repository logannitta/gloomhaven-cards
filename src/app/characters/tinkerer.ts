import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export class Tinkerer implements Character {
  name = 'Tinkerer';
  health = 12;
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) card with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
    },
    { name: 'Primary', completed: false, text: 'Add two (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add one (+3) card' },
    { name: 'Primary', completed: false, text: 'Add two rolling [Fire] cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Muddle] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Wound] card' },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Wound] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 2 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Heal 2 Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+0) [Add Target] card',
    },
  ];
}
