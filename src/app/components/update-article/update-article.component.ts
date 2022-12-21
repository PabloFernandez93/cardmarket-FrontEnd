import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../model/Article";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  articleForm: FormGroup = this.fb.group({
    id: [0],
    price: [0, [Validators.required, Validators.min(0)]],
    condition: ['', Validators.required],
    language: ['', Validators.required],
    card: this.fb.group({
      id: [0]
    })
  });

  updateArticle() {
    if (this.articleForm.invalid) return;

    const articleBackend: Article = {
      ...this.articleForm.value
    }

    this.articleService.updateArticle(articleBackend).subscribe(val => {
      alert("Article was updated!")
    })

  }

}
