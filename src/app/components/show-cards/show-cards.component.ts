import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../../services/card.service";
import {Card} from "../../model/Card";

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css']
})
export class ShowCardsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cardService: CardService) {
  }

  // card?: Card;
  cardList: Card[] = [];
  filter: string = '';
  makeCardSelected: boolean = false;


  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getAllCards().subscribe(card => this.cardList = card);
  }

  filterCards(cards: Card[]) {
    if (!this.filter) {
      return cards;
    }
    return cards.filter(card => card.name.toLowerCase().includes(this.filter.toLowerCase()))
  }
}
