import { Character, Perk } from './character';
import { BasicPerkAction } from './perk-actions';

export class Soothsinger implements Character {
  name = 'Soothsinger';
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
    { name: 'Primary', completed: false, text: 'Remove one (-2) card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+4) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace two (+1) cards with one (+4) card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+1) [Immobilize] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+1) [Disarm] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) [Wound] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) [Poison] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+2) [Curse] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (+0) cards with one (+3) [Muddle] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) cards with one (+0) [Stun] card',
    },
    { name: 'Primary', completed: false, text: 'Add three rolling (+1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Curse] cards',
    },
  ];
}
