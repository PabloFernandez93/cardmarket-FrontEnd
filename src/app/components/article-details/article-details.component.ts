import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/Article";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  // article?: Article;

  @Input()
  transferedArticle?: Article;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private location: Location) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.paramMap.get("id")
    // if (id) {
    //   this.articleService.getArticlebyId(Number.parseInt(id))
    //     .subscribe(article => this.article = article)
    // }
    // this.article = this.transferedArticle;
    console.log(this.transferedArticle?.id)
  }

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
