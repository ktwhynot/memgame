import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from './cards';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
  cardA: Card | undefined;
  cardA$ = new Subject<Card | undefined>();
  cardB: Card | undefined;
  cardB$ = new Subject<Card | undefined>();
  matchedCards: Card[] = [];
  matchedCards$ = new Subject<Card[]>();
  score = 0;
  score$ = new Subject<number>();

  incrementScore(): void {
    this.score++;
    this.score$.next(this.score);
  }

  changeCardA(card: Card | undefined): void {
    this.cardA = card;
    this.cardA$.next(this.cardA);
  }

  changeCardB(card: Card | undefined): void {
    this.cardB = card;
    this.cardB$.next(this.cardB);
  }

  // check if two cards are equal via suit and face
  cardEquals(cardA: Card | undefined, cardB: Card | undefined): boolean {
    if (cardA && cardB) {
      return cardA.suit === cardB.suit && cardA.face === cardB.face;
    }
    return false;
  }

  cardinMatchedCards(card: Card): boolean {
    for (const matchedCard of this.matchedCards) {
      if (this.cardEquals(card, matchedCard)) {
        return true;
      }
    }
    return false;
  }

  // add a card to either cardA or cardB
  // use an async function to wait for the card to be added
  async addCard(card: Card) {
    // if cardA is undefined and card is not present in matchedCards
    if (!this.cardA && !this.cardinMatchedCards(card) && !(card === this.cardB)) {
      // set cardA to the card
      this.changeCardA(card);
    }
    // if cardB is undefined and card is not present in matchedCards
    else if (!this.cardB && !this.cardinMatchedCards(card) && !(card === this.cardA)) {
      // set cardB to the card
      this.changeCardB(card);
    }
    // if both cards are defined
    if (this.cardA && this.cardB) {
      // wait 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      // check if the cards match
      if (!this.checkMatch()) {
        // if the cards don't match, add 1 to the score
        this.incrementScore();
      }else{
        // if the cards do match, add the cards to the matchedCards array
        this.matchedCards.push(this.cardA);
      }
      // reset the cards
      this.changeCardA(undefined);
      this.changeCardB(undefined);
    }
  }


  // check if cards match
  checkMatch(): boolean {
    // if both cards are defined
    if (this.cardA && this.cardB) {
      // if the cards match
      if (this.cardA.suit === this.cardB.suit && this.cardA.face === this.cardB.face) {
        return true;
      }
    }
    return false;
  }

  constructor() { }
}
