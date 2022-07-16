import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export class Spellweaver implements Character {
  name = 'Spellweaver';
  health = 8;
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Remove four (+0) cards',
      addAction: BasicPerkAction['Remove four +0 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
    },
    { name: 'Primary', completed: false, text: 'Add two (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add two (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add one (+0) [Stun] card' },
    // { name: 'Primary', completed: false, text: 'Add one (+1) [Wound] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Immobilize] card',
    },
    { name: 'Primary', completed: false, text: 'Add one (+1) [Curse] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Fire] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Fire] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Ice] card' },
    { name: 'Primary', completed: false, text: 'Add one (+2) [Ice] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Earth] card and one rolling [Air] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Light] card and one rolling [Dark] card',
    },
  ];
}
