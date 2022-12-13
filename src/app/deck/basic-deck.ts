export enum CardId {
  miss,
  plus0,
  plus1,
  plus2,
  minus1,
  minus2,
  times2,
  curse,
  bless,
  plagueheraldAirPlus1,
  plagueheraldRollingPoison,
  plagueheraldRollingCurse,
  plagueheraldRollingImmobilize,
  plagueheraldRollingStun,
  brutePlus3,
  bruteRollingPush1,
  bruteRollingPierce3,
  bruteRollingStun,
  bruteRollingDisarm,
  bruteRollingMuddle,
  bruteRollingAddTarget,
  brutePlus1Shield1Self,
  beastTyrantPlus1Immobilize,
  beastTyrantPlus1Wound,
  beastTyrantRollingEarth,
  beastTyrantRollingHeal1Self,
  berserkerPlus2Fire,
  berserkerRollingHeal1Self,
  berserkerRollingPlus1Disarm,
  berserkerRollingPlus2,
  berserkerRollingStun,
  berserkerRollingWound,
  quartermasterPlus0RefreshItem,
  quartermasterRollingAddTarget,
  quartermasterRollingMuddle,
  quartermasterRollingPierce3,
  quartermasterRollingPlus1,
  quartermasterRollingStun,
  summonerRollingAir,
  summonerRollingDark,
  summonerRollingEarth,
  summonerRollingFire,
  summonerRollingPoison,
  summonerRollingWound,
  summonerRollingHeal1Self,
  summonerPlus2,
  cragheartRollingPush2,
  cragheartRollingEarth,
  cragheartRollingAir,
  cragheartPlus2Muddle,
  cragheartPlus1Immobilize,
  demolitionistPlus0AdjacentSuffer1,
  demolitionistPlus0Poison,
  demolitionistPlus2,
  demolitionistPlus2Earth,
  demolitionistPlus2Fire,
  demolitionistPlus2Muddle,
  divinerPlus1Heal2Ally,
  divinerRollingHeal1Self,
  divinerRollingCurse,
  divinerPlus2RegenerateSelf,
  divinerPlus3Muddle,
  divinerPlus2Light,
  divinerPlus2Dark,
  divinerPlus2Curse,
  divinerPlus3Shield1Self,
  divinerPlus1Shield1Ally,
  doomstalkerPlus0Stun,
  doomstalkerRollingPlus1,
  doomstalkerRollingAddTarget,
  doomstalkerPlus2Muddle,
  doomstalkerPlus1Wound,
  doomstalkerPlus1Poison,
  doomstalkerPlus1Immobilize,
  elementalistPlus0AddTarget,
  elementalistPlus0Stun,
  elementalistPlus1Wound,
  elementalistPlus1Push1,
  elementalistPlus0Ice,
  elementalistPlus0Fire,
  elementalistPlus0Earth,
  elementalistPlus0Air,
  hatchetPlus0Stun,
  hatchetPlus3,
  hatchetPlus2Muddle,
  hatchetPlus2Air,
  hatchetPlus1Wound,
  hatchetPlus1Stun,
  hatchetPlus1Poison,
  hatchetPlus1Immobilize,
  hatchetPlus1Push2,
  mindthiefPlus2Ice,
  mindthiefRollingDisarm,
  mindthiefRollingImmobilize,
  mindthiefRollingMuddle,
  mindthiefRollingPlus1,
  mindthiefRollingPull1,
  mindthiefRollingStun,
  nightshroudMinus1Dark,
  nightshroudPlus1Dark,
  nightshroudPlus1Invisible,
  nightshroudRollingAddTarget,
  nightshroudRollingCurse,
  nightshroudRollingHeal1Self,
  nightshroudRollingMuddle,
  redguardPlus1FireLight,
  redguardPlus2Light,
  redguardPlus2Fire,
  redguardPlus1Wound,
  redguardPlus1Shield1Self,
  redguardPlus1Immobilize,
  sawbonesPlus0RefreshItem,
  sawbonesRollingWound,
  sawbonesRollingStun,
  sawbonesRollingPlus2,
  sawbonesRollingHeal3Self,
  sawbonesPlus1Immobilize,
  scoundrelRollingInvisible,
  scoundrelRollingMuddle,
  scoundrelRollingPoison,
  scoundrelRollingPierce3,
  scoundrelRollingPlus1,
  soothsingerPlus0Stun,
  soothsingerPlus1Disarm,
  soothsingerPlus1Immobilize,
  soothsingerPlus2Curse,
  soothsingerPlus2Poison,
  soothsingerPlus2Wound,
  soothsingerPlus3Muddle,
  soothsingerPlus4,
  soothsingerRollingCurse,
  soothsingerRollingPlus1,
  spellweaverPlus0Stun,
  spellweaverPlus1Curse,
  spellweaverPlus1Immobilize,
  spellweaverPlus1Wound,
  spellweaverPlus2Fire,
  spellweaverPlus2Ice,
  spellweaverRollingAir,
  spellweaverRollingDark,
  spellweaverRollingEarth,
  spellweaverRollingLight,
  sunkeeperRollingHeal1Self,
  sunkeeperRollingLight,
  sunkeeperRollingPlus1,
  sunkeeperRollingStun,
  sunkeeperRollingShield1Self,
  tinkererRollingFire,
  tinkererRollingMuddle,
  tinkererPlus3,
  tinkererPlus1Wound,
  tinkererPlus1Immobilize,
  tinkererPlus1Heal2Self,
  tinkererPlus0AddTarget,
  voidwardenPlus3,
  voidwardenPlus1Poison,
  voidwardenPlus1Ice,
  voidwardenPlus1Dark,
  voidwardenPlus1Curse,
  voidwardenPlus1Heal1Ally,
  voidwardenPlus0Heal1Ally,
  deathwalkerPlus2Dark,
}

export const basicCardIds = [
  CardId.miss,
  CardId.plus0,
  CardId.plus1,
  CardId.plus2,
  CardId.minus1,
  CardId.minus2,
  CardId.times2,
];

export interface Card {
  img: string;
  damage?: number;
  shuffle?: boolean;
  name?: string;
  id?: CardId;
}

export const basicCards = {
  miss: {
    img: 'assets/cards/Miss.png',
    damage: 0,
    shuffle: true,
    name: 'Miss',
    id: CardId.miss,
  },
  times2: {
    img: 'assets/cards/Times2.png',
    damage: 0,
    shuffle: true,
    name: 'Times2',
    id: CardId.times2,
  },
  minus1: {
    img: 'assets/cards/Minus1.png',
    damage: -1,
    name: '-1',
    id: CardId.minus1,
  },
  minus2: {
    img: 'assets/cards/Minus2.png',
    damage: -2,
    name: '-2',
    id: CardId.minus2,
  },
  plus0: {
    img: 'assets/cards/Plus0.png',
    damage: 0,
    name: '0',
    id: CardId.plus0,
  },
  plus1: {
    img: 'assets/cards/Plus1.png',
    damage: 1,
    name: '+1',
    id: CardId.plus1,
  },
  plus2: {
    img: 'assets/cards/Plus2.png',
    damage: 2,
    name: '+2',
    id: CardId.plus2,
  },
  curse: {
    img: 'assets/cards/Curse.png',
    id: CardId.curse,
  },
  bless: {
    img: 'assets/cards/Bless.png',
    id: CardId.bless,
  },
};

export const basicDeck: Card[] = [
  basicCards.times2,
  basicCards.miss,
  // [...Array.from<Card>({ length: 5 }, (): Card => basicCards.minus1)],
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus1,
  basicCards.minus2,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus0,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus1,
  basicCards.plus2,
];
