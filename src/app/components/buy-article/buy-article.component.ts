import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-buy-article',
  templateUrl: './buy-article.component.html',
  styleUrls: ['./buy-article.component.css']
})
export class BuyArticleComponent implements OnInit {

  articleList: Article[] = [];

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private location: Location) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this.articleService.getArticlesByCardId(Number.parseInt(id))
        .subscribe(articles => this.articleList = articles)
    }
  }

  buyArticle(id: number, name: string) {
    this.articleService.deleteArticleById(id).subscribe(val => {
      alert("Congratulations! You bought " + name.toUpperCase() + "!");
      window.location.assign('http://localhost:4200/show-cards')
    });
  }

  goBack() {
    this.location.back()
  }
}
