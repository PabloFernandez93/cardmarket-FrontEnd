import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../model/Article";
import {Condition} from "../../model/Condition";
import {Language} from "../../model/Language";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private fb: FormBuilder) {
  }

  @Input()
  mySelectedArticle?: Article;

  ngOnInit(): void {
  }

  articleForm: FormGroup = this.fb.group({
    price: [this.mySelectedArticle?.price, [Validators.required, Validators.min(0.01), Validators.pattern("\^([\\d]{0,4})(\\.|$)([\\d]{1,2}|)$")]],
    condition: [0, [Validators.required]],
    language: [0, [Validators.required]],
  });

  updateArticle() {
    if (this.articleForm.invalid) return;

    const articleBackend: Article = {
      ...this.mySelectedArticle,
      ...this.articleForm.value,
    }

    console.log(articleBackend)
    this.articleService.updateArticle(articleBackend).subscribe(a => {
      alert("Article " + articleBackend.card.name + " updated");
      window.location.assign('http://localhost:4200/show-articles')

    })

  }

  get languageEnum() {
    return Object.keys(Language).filter(key => isNaN(Number(key)));
  }

  get conditionEnum() {
    return Object.keys(Condition).filter(key => isNaN(Number(key)));
  }

  get priceControl() {
    return this.articleForm.get("price")
  }
}
