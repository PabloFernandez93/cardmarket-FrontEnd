import { Component, OnInit } from '@angular/core';
import {Article} from "../model/Article";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article?: Article;

  articleList: Article[] = [];

  constructor(private articleSerice: ArticleService) { }

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle() {
    this.articleSerice.getallArticles().subscribe(article => this.articleList = article)
  }

  getArticlebyId(index: number) {
    this.articleSerice.getArticlebyId(index).subscribe(article => console.log(article))
  }


  deleteArticleById(index: number) {
    this.articleSerice.deleteArticleById(index)
      .subscribe(result => {console.log(result)
      })
  }
}
