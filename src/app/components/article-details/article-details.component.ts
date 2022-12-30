import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input()
  transferredArticle?: Article;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {}

  deleteArticle(id: number) {
    this.articleService.deleteArticleById(id).subscribe(val => {
      alert("Article was deleted");
      window.location.assign('http://localhost:4200/show-articles')
      });

  }

  openUpdateFormBool: boolean = false;
  openUpdateForm() {
    this.openUpdateFormBool = !this.openUpdateFormBool;
  }
}
