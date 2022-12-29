import {Component, ContentChildren, EventEmitter, OnInit, Output, QueryList} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../../services/card.service";
import {Card} from "../../model/Card";
import {BuyArticleComponent} from "../buy-article/buy-article.component";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css']
})
export class ShowCardsComponent implements OnInit {

  @ContentChildren(BuyArticleComponent)
  tabs: QueryList<BuyArticleComponent> | undefined

  constructor(private route: ActivatedRoute, private cardService: CardService, private articleService: ArticleService) {
  }

  articleList: Article[] = [];
  cardList: Card[] = [];
  filter: string = '';

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getAllCards().subscribe(card =>
      this.cardList = card)
            }

  filterCards(cards: Card[]) {
    if (!this.filter) {
      return cards;
    }
    return cards.filter(card => card.name.toLowerCase().includes(this.filter.toLowerCase()))
  }

  placeholderCardId: number = 0

  transferCard(id: number) {
    this.placeholderCardId = id;
    console.log("Selected Card-Id:" + this.placeholderCardId)
  }
}
