import { Component } from '@angular/core';
import { Card, CARDS } from '../cards';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {
  // create a copy of the CARDS array
  deckA: Card[] = [...CARDS];
  // create a double deck of cards and shuffle it
  deck: Card[] = this.shuffle(this.deckA);

  // shuffle the deck
  shuffle(deck: Card[]): Card[] {
    // create a copy of the deck
    const shuffledDeck = [...deck];
    // loop through the deck
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      // pick a random index
      const j = Math.floor(Math.random() * (i + 1));
      // swap the current card with the random card
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    // return the shuffled deck
    return shuffledDeck;
  }

  ngOnInit(): void {

  }
}
