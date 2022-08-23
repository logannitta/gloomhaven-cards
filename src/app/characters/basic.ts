import { Character, Perk } from './character';

export class Basic implements Character {
  name = 'Basic';
  health = [0];
  perks: Perk[] = [];
}
