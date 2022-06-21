import { Character, Perk } from './character';

export class Basic implements Character {
  name = '';
  health = 0;
  perks: Perk[] = [];
}
