import { Component, Input } from '@angular/core';
import { Card, CardSuits, suitToString, faceToString } from '../cards';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  card: Card | undefined;
  cardImg: string | undefined;
  gameFn: any;
  visible = false;
  highlighted = false;

  serviceCardA: Card | undefined;
  serviceCardB: Card | undefined;
  serviceMatchedCards: Card[] = [];

  ngOnInit(): void {
    this.gameService.cardA$.subscribe(card => {
      this.serviceCardA = card;
      this.checkOpen();
    }, err => {
      console.log(err);
    });
    this.gameService.cardB$.subscribe(card => {
      this.serviceCardB = card;
      this.checkOpen();
    }, err => {
      console.log(err);
    });
    this.gameService.matchedCards$.subscribe(cards => {
      this.serviceMatchedCards = cards;
      this.checkOpen();
    }, err => {
      console.log(err);
    });

    this.cardImg = this.getCardImg();
    console.log(this.cardImg);
  }

  // get the image path for the card
  // card images are located in src/assets/cards
  // file name is the suit of the card (eg. heart, diamond, spade, club) followed by an underscore, followed by the face (ie. 1, 2 ,3, jack, queen, king)
  // eg. heart_1.png, diamond_2.png, spade_jack.png, club_queen.png
  getCardImg(): string {
    if (this.card) {
      return `/assets/cards/${suitToString(this.card.suit)}_${faceToString(this.card.face)}.png`;
    }
    return '';
  }


  // check card equality via suit and face
  cardEquals(cardA: Card | undefined, cardB: Card | undefined): boolean {
    if (cardA && cardB) {
      return cardA.suit === cardB.suit && cardA.face === cardB.face;
    }
    return false;
  }

  // Check if this card is open
  // a card is open if it is either cardA or cardB
  // or if a card that equals it is in the matchedCards array
  isOpen(): boolean {
    // if this card equals cardA or cardB
    if ((this.cardEquals(this.card, this.serviceCardA) && this.card?.deck === this.serviceCardA?.deck) || (this.cardEquals(this.card, this.serviceCardB) && this.card?.deck === this.serviceCardB?.deck)) {
      this.highlighted = true;
      return true;
    }else{
      this.highlighted = false;
    }
    // if this card is in the matchedCards array
    if (this.gameService.matchedCards) {
      for (const matchedCard of this.gameService.matchedCards) {
        if (this.cardEquals(this.card, matchedCard)) {
          return true;
        }
      }
    }
    // otherwise return false
    this.highlighted = false;
    return false;
  }

  checkOpen(): void {
    if(this.isOpen()){
      this.visible = true;
    }else{
      this.visible = false;
    }
  }

  sendCardToService(): void {
    // if one of cardA or cardB is undefined, send this card to the service
    if (this.card && (!this.serviceCardA || !this.serviceCardB)) {
      this.gameService.addCard(this.card);
    }
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

  public get cardSuits(): typeof CardSuits {
    return CardSuits;
  }

  constructor(private gameService: GameserviceService) {}
}

