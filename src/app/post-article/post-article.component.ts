import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../services/article.service";
import {Article} from "../model/Article";

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {

  articleForm: FormGroup = this.fb.group({
    price: [0, [Validators.required, Validators.min(0)]],
    condition: ['', Validators.required],
    language: ['', Validators.required],
    cardId: [0]
  });

  constructor(private articleService: ArticleService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  submitArticle() {
    if(this.articleForm.invalid) return;

    const articleBackend: Article = {
      ...this.articleForm.value,
    }

    this.articleService.createArticle(articleBackend).subscribe(a => {
      alert("Article wurde erstellt!");
    })
  }
}
