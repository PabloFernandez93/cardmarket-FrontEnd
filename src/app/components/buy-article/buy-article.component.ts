import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../../model/Card";

@Component({
  selector: 'app-buy-article',
  templateUrl: './buy-article.component.html',
  styleUrls: ['./buy-article.component.css']
})
export class BuyArticleComponent implements OnInit {

  articleList: Article[] = [];

  @Input()
  selectedCard?: Card;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {

  }

  ngOnInit(): void {
    if (this.selectedCard) {
      this.getArticle()

      console.log(this.articleList)


      this.articleList.filter(article => article.card.id == this.selectedCard?.id)


      console.log(this.articleList)
    }

  }



  getArticle() {
    this.articleService.getAllArticles().subscribe(articles => this.articleList = articles);

  }

}
