import { basicCards, Card, CardId } from '../deck/basic-deck';

export const BasicPerkAction = {
  'Replace one -2 with one +0 card': (deck: Card[]) => {
    const newDeck = deck.filter((card) => card.id !== CardId.minus2);
    newDeck.push(basicCards.plus0);
    return newDeck;
  },

  'Replace one -1 with one +1 card': (deck: Card[]) => {
    const newDeck = [...deck];
    const firstMinusOneIndex = newDeck.findIndex(
      (card) => card.id === CardId.minus1
    );
    if (firstMinusOneIndex !== undefined) {
      newDeck.splice(firstMinusOneIndex, 1, basicCards.plus1);
    }
    return newDeck;
  },

  'Replace one +0 with one +2 card': (deck: Card[]) => {
    const newDeck = [...deck];
    const firstPlusZeroIndex = newDeck.findIndex(
      (card) => card.id === CardId.plus0
    );
    if (firstPlusZeroIndex !== undefined) {
      newDeck.splice(firstPlusZeroIndex, 1, basicCards.plus2);
    }
    return newDeck;
  },

  'Remove two -1 cards': (deck: Card[]) => {
    const newDeck = [...deck];
    const firstMinusOneIndex = newDeck.findIndex(
      (card) => card.id === CardId.minus1
    );
    if (firstMinusOneIndex !== undefined) {
      newDeck.splice(firstMinusOneIndex, 1);
    }

    const secondMinusOneIndex = newDeck.findIndex(
      (card) => card.id === CardId.minus1
    );
    if (secondMinusOneIndex !== undefined) {
      newDeck.splice(secondMinusOneIndex, 1);
    }
    return newDeck;
  },

  'Add two +1 cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },

  'Ignore negative scenario effects and add one (+1) card': (deck: Card[]) => {
    return [...deck, basicCards.plus1];
  },

  'Ignore negative item effects and add one (+1) card': (deck: Card[]) => {
    return [...deck, basicCards.plus1];
  },
};
