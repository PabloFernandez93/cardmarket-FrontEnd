import {Component, Input, OnInit} from '@angular/core';
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
  selectedCardName?: String;

  @Input()
  isCardSelected?: boolean;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getallArticles().subscribe(articles => this.articleList = articles);
  }

  filterArticles(articles: Article[]) {
    if (!this.filter) {
      return articles;
    }
    return articles.filter(article => article.card.name.toLowerCase().includes(this.filter.toLowerCase()))
  }
}
