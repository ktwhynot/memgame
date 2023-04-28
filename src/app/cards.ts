export enum CardFaces{
  Ace = 'A',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K'
}

// export a function that converts a CardFace to a string
// Aces become 1, while J, Q, K are their full string names (ie. jack, queen, king) in lowercase
export function faceToString(face: CardFaces): string {
  switch (face) {
    case CardFaces.Ace:
      return '1';
    case CardFaces.Jack:
      return 'jack';
    case CardFaces.Queen:
      return 'queen';
    case CardFaces.King:
      return 'king';
    default:
      return face.toLowerCase();
  }
}

export enum CardSuits{
  Clubs = '♣',
  Diamonds = '♦',
  Hearts = '♥',
  Spades = '♠'
}

export function suitToString(suit: CardSuits): string {
  switch (suit) {
    case CardSuits.Clubs:
      return 'club';
    case CardSuits.Diamonds:
      return 'diamond';
    case CardSuits.Hearts:
      return 'heart';
    case CardSuits.Spades:
      return 'spade';
  }
}

export interface Card {
  suit: CardSuits;
  face: CardFaces;
  deck: number;
}

// export a constant array of all the cards in a deck twice
export const CARDS: Card[] = [
  { suit: CardSuits.Clubs, face: CardFaces.Ace, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Two, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Three, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Four, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Five, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Six, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Seven, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Eight, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Nine, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Ten, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Jack, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Queen, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.King, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Ace, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Two, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Three, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Four, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Five, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Six, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Seven, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Eight, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Nine, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Ten, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Jack, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.Queen, deck: 1 },
  { suit: CardSuits.Diamonds, face: CardFaces.King, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Ace, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Two, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Three, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Four, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Five, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Six, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Seven, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Eight, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Nine, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Ten, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Jack, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.Queen, deck: 1 },
  { suit: CardSuits.Hearts, face: CardFaces.King, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Ace, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Two, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Three, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Four, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Five, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Six, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Seven, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Eight, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Nine, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Ten, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Jack, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.Queen, deck: 1 },
  { suit: CardSuits.Spades, face: CardFaces.King, deck: 1 },
  { suit: CardSuits.Clubs, face: CardFaces.Ace, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Two, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Three, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Four, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Five, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Six, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Seven, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Eight, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Nine, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Ten, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Jack, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.Queen, deck: 2 },
  { suit: CardSuits.Clubs, face: CardFaces.King, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Ace, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Two, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Three, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Four, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Five, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Six, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Seven, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Eight, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Nine, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Ten, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Jack, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.Queen, deck: 2 },
  { suit: CardSuits.Diamonds, face: CardFaces.King, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Ace, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Two, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Three, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Four, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Five, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Six, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Seven, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Eight, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Nine, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Ten, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Jack, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.Queen, deck: 2 },
  { suit: CardSuits.Hearts, face: CardFaces.King, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Ace, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Two, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Three, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Four, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Five, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Six, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Seven, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Eight, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Nine, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Ten, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Jack, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.Queen, deck: 2 },
  { suit: CardSuits.Spades, face: CardFaces.King, deck: 2 }
];

