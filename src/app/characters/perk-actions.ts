import { basicCards, Card, CardId } from '../deck/basic-deck';

export const removeCard = (
  cardId: CardId,
  deck: Card[],
  cardsToAdd: Card[] = []
) => {
  const index = deck.findIndex((card) => card.id === cardId);
  if (index === -1) {
    throw new Error('Card Not Found');
  }
  deck.splice(index, 1, ...cardsToAdd);
};

export const BasicPerkAction = {
  'Replace one -2 with one +0 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus2, newDeck, [basicCards.plus0]);
    return newDeck;
  },

  'Undo Replace one -2 with one +0 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [basicCards.minus2]);
    return newDeck;
  },

  'Replace one -1 with one +1 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus1, newDeck, [basicCards.plus1]);
    return newDeck;
  },

  'Undo Replace one -1 with one +1 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck, [basicCards.minus1]);
    return newDeck;
  },

  'Replace one +0 with one +2 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck, [basicCards.plus2]);
    return newDeck;
  },

  'Undo Replace one +0 with one +2 card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus2, newDeck, [basicCards.plus0]);
    return newDeck;
  },

  'Remove two -1 cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.minus1, newDeck);
    removeCard(CardId.minus1, newDeck);
    return newDeck;
  },

  'Undo Remove two -1 cards': (deck: Card[]) => {
    return [...deck, basicCards.minus1, basicCards.minus1];
  },

  'Remove four +0 cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus0, newDeck);
    removeCard(CardId.plus0, newDeck);
    removeCard(CardId.plus0, newDeck);
    removeCard(CardId.plus0, newDeck);
    return newDeck;
  },
  'Undo Remove four +0 cards': (deck: Card[]) => {
    return [
      ...deck,
      basicCards.plus0,
      basicCards.plus0,
      basicCards.plus0,
      basicCards.plus0,
    ];
  },

  'Add two +1 cards': (deck: Card[]) => {
    return [...deck, basicCards.plus1, basicCards.plus1];
  },

  'Undo Add two +1 cards': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck);
    removeCard(CardId.plus1, newDeck);
    return newDeck;
  },

  'Ignore negative scenario effects and add one (+1) card': (deck: Card[]) => {
    return [...deck, basicCards.plus1];
  },

  'Undo Ignore negative scenario effects and add one (+1) card': (
    deck: Card[]
  ) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck);
    return newDeck;
  },

  'Ignore negative item effects and add one (+1) card': (deck: Card[]) => {
    return [...deck, basicCards.plus1];
  },

  'Undo Ignore negative item effects and add one (+1) card': (deck: Card[]) => {
    const newDeck = [...deck];
    removeCard(CardId.plus1, newDeck);
    return newDeck;
  },
};
