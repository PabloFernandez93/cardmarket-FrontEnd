import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article?: Article;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this.articleService.getArticlebyId(Number.parseInt(id))
        .subscribe(article => this.article = article)
    }
  }

}
