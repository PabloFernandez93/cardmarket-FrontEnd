import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../model/Article";

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
  }

  // article?: Article;
  articleList: Article[] = [];


  ngOnInit(): void {
    this.getArticle()
  }

  getArticle() {
    this.articleService.getallArticles().subscribe(article => this.articleList = article);

  }

  /*
  getArticleById(index: number) {
    this.articleService.getArticlebyId(index).subscribe(article => console.log(article))
  }


  deleteArticleById(index: number) {
    this.articleService.deleteArticleById(index)
      .subscribe(result => {
        console.log(result)
      })
  }

   */
}
