import {Component} from '@angular/core';
import {CardService} from "../../../services/card.service";
import {Card} from "../../../model/Card";

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.css']
})
export class RandomCardComponent {

  randomCard!: Card;

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardService.getRandomCard().subscribe(card => this.randomCard = card)
  }

}
