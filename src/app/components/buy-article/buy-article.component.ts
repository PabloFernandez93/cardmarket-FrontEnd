import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../model/Card";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";

@Component({
  selector: 'app-buy-article',
  templateUrl: './buy-article.component.html',
  styleUrls: ['./buy-article.component.css']
})
export class BuyArticleComponent implements OnInit {

  articleList: Article[] = [];
  filter: string = '';

  @Input()
  selectedCardName: string = '';

  // @Input()
  isCardSelected?: boolean = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getallArticles().subscribe(articles => this.articleList = articles);

    // if (this.selectedCardName == '') {
    //   this.isCardSelected = false;
    // } else {
    //   this.isCardSelected = true;
    // }

    // this.filter = this.selectedCardName
  }

  filterArticles(articles: Article[]) {
    if (!this.filter) {
      return articles;
    }
    return articles.filter(article => article.card.name.toLowerCase().includes(this.filter.toLowerCase()))
  }

  switchIsCardSelectedOn(value: string) {
    this.isCardSelected = !this.isCardSelected;
    this.filter = value;
  }
}
