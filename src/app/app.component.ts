import { Component } from '@angular/core';
import { GameserviceService } from './gameservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memory Game';
  scoreView = 0;

  ngOnInit(): void {
    this.gameService.score$.subscribe(score => {
      this.scoreView = score;
    }, err => {
      console.log(err);
    });
  }

  // increment the score in gameService
  incrementScore(): void {
    this.gameService.incrementScore();
  }


  constructor(private gameService: GameserviceService) {}
}
