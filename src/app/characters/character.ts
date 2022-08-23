import { Doomstalker } from './doomstalker';
import { Brute } from './brute';
import { Summoner } from './summoner';
import { Cragheart } from './cragheart';
import { Mindthief } from './mindthief';
import { Scoundrel } from './scoundrel';
import { Spellweaver } from './spellweaver';
import { Tinkerer } from './tinkerer';
import { Plagueherald } from './plagueherald';
import { Nightshroud } from './nightshroud';
import { Berserker } from './berserker';
import { Soothsinger } from './soothsinger';
import { Sawbones } from './sawbones';
import { Sunkeeper } from './sunkeeper';
import { Quartermaster } from './quartermaster';
import { Elementalist } from './elementalist';
import { BeastTyrant } from './beast-tyrant';
import { Diviner } from './diviner';
import { Demolitionist } from './demolitionist';
import { Hatchet } from './hatchet';
import { RedGuard } from './red-guard';
import { Voidwarden } from './voidwarden';
import { Basic } from './basic';

export interface Perk {
  name: string;
  completed: boolean;
  text: string;
  addAction?: Function;
  removeAction?: Function;
}

export interface Character {
  name: string;
  image?: string;
  icon?: string;
  health: number[];
  perks: Perk[];
}

export const CharacterMap: { [key: string]: any } = {
  basic: Basic,
  brute: Brute,
  cragheart: Cragheart,
  mindthief: Mindthief,
  scoundrel: Scoundrel,
  spellweaver: Spellweaver,
  tinkerer: Tinkerer,
  doomstalker: Doomstalker,
  summoner: Summoner,
  plagueherald: Plagueherald,
  nightshroud: Nightshroud,
  berserker: Berserker,
  soothsinger: Soothsinger,
  sawbones: Sawbones,
  sunkeeper: Sunkeeper,
  quartermaster: Quartermaster,
  elementalist: Elementalist,
  beastTyrant: BeastTyrant,
  diviner: Diviner,
  demolitionist: Demolitionist,
  hatchet: Hatchet,
  redGuard: RedGuard,
  voidwarden: Voidwarden,
};
