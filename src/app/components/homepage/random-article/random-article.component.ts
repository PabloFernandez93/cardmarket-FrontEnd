import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../../model/Article";

@Component({
  selector: 'app-random-article',
  templateUrl: './random-article.component.html',
  styleUrls: ['./random-article.component.css']
})
export class RandomArticleComponent {

  randomArticle!: Article;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getRandomArticle().subscribe(article => this.randomArticle = article)
  }

  buyArticle(id: number, name: string) {
    this.articleService.deleteArticleById(id).subscribe(val => {
      alert("Congratulations! You bought " + name.toUpperCase() + "!");
      window.location.assign('http://localhost:4200/homepage')
    });
  }
}
