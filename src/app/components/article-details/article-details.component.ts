import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {formatCurrency} from "@angular/common";

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

  deleteArticle(id: number, name: string) {
    if (window.confirm('Are sure you want to remove ' + name.toUpperCase() + '?')) {
      this.articleService.deleteArticleById(id).subscribe(val => {
        alert("Article " + name.toUpperCase() + " was removed from your Cards!");
        window.location.assign('http://localhost:4200/show-articles')
      });
    }
  }

  openUpdateFormBool: boolean = false;
  openUpdateForm() {
    this.openUpdateFormBool = !this.openUpdateFormBool;
  }
}
