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
  selectedCardId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {}

  showArticle() {
    if (this.selectedCardId) {
      this.articleService.getArticlesByCardId(this.selectedCardId).subscribe(articles => this.articleList = articles)

      console.log("Liste: " + this.articleList)
    }
  }

  buyArticle(id: number, name: string) {
    this.articleService.deleteArticleById(id).subscribe(val => {
      alert("Congratulations! You bought " + name.toUpperCase() + "!");
      window.location.assign('http://localhost:4200/show-cards')
    });
  }
}
