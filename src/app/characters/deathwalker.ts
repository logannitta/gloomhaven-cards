import { basicCards, Card, CardId } from '../deck/basic-deck';
import { Character, Perk } from './character';
import { BasicPerkAction, removeCard } from './perk-actions';

export const deathwalkerCards = {
  plus2Dark: {
    img: 'assets/cards/deathwalker/Plus2Dark.png',
    name: 'Plus 2 Dark',
    id: CardId.deathwalkerPlus2Dark,
  },
};

export const deathwalkerActions = {
  // 'Replace one (-1) card with one (+1) [Heal 2 Ally] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.minus1, newDeck, [divinerCards.plus1Heal2Ally]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (-1) card with one (+1) [Heal 2 Ally] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus1Heal2Ally, newDeck, [basicCards.minus1]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace one (+0) card with one (+2) [Dark] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus0, newDeck, [divinerCards.plus2Dark]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+2) [Dark] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus2Dark, newDeck, [basicCards.plus0]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace one (+0) card with one (+2) [Light] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus0, newDeck, [divinerCards.plus2Light]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+2) [Light] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus2Light, newDeck, [basicCards.plus0]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace one (+0) card with one (+2) [Curse] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus0, newDeck, [divinerCards.plus2Curse]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+2) [Curse] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus2Curse, newDeck, [basicCards.plus0]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace one (+0) card with one (+3) [Muddle] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus0, newDeck, [divinerCards.plus3Muddle]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+3) [Muddle] card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus3Muddle, newDeck, [basicCards.plus0]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace one (+0) card with one (+2) [Regenerate Self] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus0, newDeck, [divinerCards.plus2RegenerateSelf]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+2) [Regenerate Self] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus2RegenerateSelf, newDeck, [
  //       basicCards.plus0,
  //     ]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace one (+0) card with one (+1) [Shield 1 Ally] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus0, newDeck, [divinerCards.plus1Shield1Ally]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace one (+0) card with one (+1) [Shield 1 Ally] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus1Shield1Ally, newDeck, [basicCards.plus0]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Replace two (+1) cards with one (+3) [Shield 1 Self] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.plus1, newDeck);
  //     removeCard(CardId.plus1, newDeck, [divinerCards.plus3Shield1Self]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Replace two (+1) cards with one (+3) [Shield 1 Self] card': (
  //   deck: Card[]
  // ) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerPlus3Shield1Self, newDeck, [
  //       basicCards.plus1,
  //       basicCards.plus1,
  //     ]);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Remove one -2 card': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.minus2, newDeck);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  // 'Undo Remove one -2 card': (deck: Card[]) => {
  //   return [...deck, basicCards.minus2, basicCards.minus2];
  // },
  // 'Add two rolling [Heal 1 Self] cards': (deck: Card[]) => {
  //   return [
  //     ...deck,
  //     divinerCards.rollingHeal1Self,
  //     divinerCards.rollingHeal1Self,
  //   ];
  // },
  // 'Undo Add two rolling [Heal 1 Self] cards': (deck: Card[]) => {
  //   const newDeck = [...deck];
  //   try {
  //     removeCard(CardId.divinerRollingHeal1Self, newDeck);
  //     removeCard(CardId.divinerRollingHeal1Self, newDeck);
  //   } catch (error) {
  //     return false;
  //   }
  //   return newDeck;
  // },
  'Add one (+2) [Dark] card': (deck: Card[]) => {
    return [...deck, deathwalkerCards.plus2Dark];
  },
  'Undo Add one (+2) [Dark] card': (deck: Card[]) => {
    const newDeck = [...deck];
    try {
      removeCard(CardId.deathwalkerPlus2Dark, newDeck);
    } catch (error) {
      return false;
    }
    return newDeck;
  },
  'Ignore negative scenario effects': () => {},
  'Undo Ignore negative scenario effects': () => {},
};

export class Deathwalker implements Character {
  name = 'Deathwalker';
  image = 'assets/classes/Deathwalker/Deathwalkerimg.png';
  icon = 'assets/classes/Deathwalker/Deathwalker.png';
  health = [6, 7, 8, 9, 10, 11, 12, 13, 14];
  perks: Perk[] = [
    {
      name: 'Primary',
      completed: false,
      text: 'Remove two (-1) cards',
      addAction: BasicPerkAction['Remove two -1 cards'],
      removeAction: BasicPerkAction['Undo Remove two -1 cards'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-2) with one (+0) card',
      addAction: BasicPerkAction['Replace one -2 with one +0 card'],
      removeAction: BasicPerkAction['Undo Replace one -2 with one +0 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) with one (+1) card',
      addAction: BasicPerkAction['Replace one -1 with one +1 card'],
      removeAction: BasicPerkAction['Undo Replace one -1 with one +1 card'],
    },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Remove two (-1) cards',
    //   addAction: BasicPerkAction['Remove two -1 cards'],
    //   removeAction: BasicPerkAction['Undo Remove two -1 cards'],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Remove one (-2) card',
    //   addAction: divinerActions['Remove one -2 card'],
    //   removeAction: divinerActions['Undo Remove one -2 card'],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
    //   addAction:
    //     divinerActions[
    //       'Replace two (+1) cards with one (+3) [Shield 1 Self] card'
    //     ],
    //   removeAction:
    //     divinerActions[
    //       'Undo Replace two (+1) cards with one (+3) [Shield 1 Self] card'
    //     ],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
    //   addAction:
    //     divinerActions[
    //       'Replace two (+1) cards with one (+3) [Shield 1 Self] card'
    //     ],
    //   removeAction:
    //     divinerActions[
    //       'Undo Replace two (+1) cards with one (+3) [Shield 1 Self] card'
    //     ],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (+0) card with one (+1) [Shield 1 Ally] card',
    //   addAction:
    //     divinerActions[
    //       'Replace one (+0) card with one (+1) [Shield 1 Ally] card'
    //     ],
    //   removeAction:
    //     divinerActions[
    //       'Undo Replace one (+0) card with one (+1) [Shield 1 Ally] card'
    //     ],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (+0) card with one (+2) [Dark] card',
    //   addAction:
    //     divinerActions['Replace one (+0) card with one (+2) [Dark] card'],
    //   removeAction:
    //     divinerActions['Undo Replace one (+0) card with one (+2) [Dark] card'],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (+0) card with one (+2) [Light] card',
    //   addAction:
    //     divinerActions['Replace one (+0) card with one (+2) [Light] card'],
    //   removeAction:
    //     divinerActions['Undo Replace one (+0) card with one (+2) [Light] card'],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (+0) card with one (+3) [Muddle] card',
    //   addAction:
    //     divinerActions['Replace one (+0) card with one (+3) [Muddle] card'],
    //   removeAction:
    //     divinerActions[
    //       'Undo Replace one (+0) card with one (+3) [Muddle] card'
    //     ],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (+0) card with one (+2) [Curse] card',
    //   addAction:
    //     divinerActions['Replace one (+0) card with one (+2) [Curse] card'],
    //   removeAction:
    //     divinerActions['Undo Replace one (+0) card with one (+2) [Curse] card'],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (+0) card with one (+2) [Regenerate Self] card',
    //   addAction:
    //     divinerActions[
    //       'Replace one (+0) card with one (+2) [Regenerate Self] card'
    //     ],
    //   removeAction:
    //     divinerActions[
    //       'Undo Replace one (+0) card with one (+2) [Regenerate Self] card'
    //     ],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Replace one (-1) card with one (+1) [Heal 2 Ally] card',
    //   addAction:
    //     divinerActions[
    //       'Replace one (-1) card with one (+1) [Heal 2 Ally] card'
    //     ],
    //   removeAction:
    //     divinerActions[
    //       'Undo Replace one (-1) card with one (+1) [Heal 2 Ally] card'
    //     ],
    // },
    // {
    //   name: 'Primary',
    //   completed: false,
    //   text: 'Add two rolling [Heal 1 Self] cards',
    //   addAction: divinerActions['Add two rolling [Heal 1 Self] cards'],
    //   removeAction: divinerActions['Undo Add two rolling [Heal 1 Self] cards'],
    // },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Dark] card',
      addAction: deathwalkerActions['Add one (+2) [Dark] card'],
      removeAction: deathwalkerActions['Undo Add one (+2) [Dark] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+2) [Dark] card',
      addAction: deathwalkerActions['Add one (+2) [Dark] card'],
      removeAction: deathwalkerActions['Undo Add one (+2) [Dark] card'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative scenario effects',
      addAction: deathwalkerActions['Ignore negative scenario effects'],
      removeAction: deathwalkerActions['Undo Ignore negative scenario effects'],
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Whenever you long rest, you may move one shadow up to 3 hexes',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'While you occupy a hex with a shadow, all attacks targeting you gain Disadvantage',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Whenever you short rest you may consume Dark to perform a Curse at range 2 as if you were occupying a hex with a shadow',
    },
  ];
}
