import { basicCards, Card, CardId } from '../deck/basic-deck';

export const removeCard = (
  cardId: CardId,
  deck: Card[],
  cardsToAdd: Card[] = []
) => {
  const index = deck.findIndex((card) => card.id === cardId);
  if (index !== undefined) {
    deck.splice(index, 1, ...cardsToAdd);
  }
};

export const BasicPerkAction = {
  'Replace one -2 with one +0 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus2, newDeck, [basicCards.plus0]);
    return newDeck;
  },

  'Replace one -1 with one +1 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus1, newDeck, [basicCards.plus1]);
    return newDeck;
  },

  'Replace one +0 with one +2 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [basicCards.plus2]);
    return newDeck;
  },

  'Remove two -1 cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus1, newDeck);
    removeCard(CardId.minus1, newDeck);
    return newDeck;
  },

  'Remove four +0 cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck);
    removeCard(CardId.plus0, newDeck);
    removeCard(CardId.plus0, newDeck);
    removeCard(CardId.plus0, newDeck);
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
