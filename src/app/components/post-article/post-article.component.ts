import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {Language} from "../../model/Language";
import {LiteralArray} from "@angular/compiler";

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {

  // language: string[] = Object.values(Language);

  articleForm: FormGroup = this.fb.group({
    price: [0, [Validators.required, Validators.min(0.01)]],
    condition: ['', [Validators.required]],
    language: [Language.ENGLISH, [Validators.required]],
    card: this.fb.group({
      id: [0]
    })
  });

  constructor(private articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute) { }

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

  addCardId(id:number):void {
    this.articleForm.get("card")?.get("id")?.setValue(id);
  }

  get
  selectedType() {
    return this.articleForm?.value.card
  }

  get languageEnum() {
    return Object.keys(Language).filter(key => isNaN(Number(key)));
  }


}
