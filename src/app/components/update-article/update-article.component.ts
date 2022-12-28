import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../model/Article";
import {Condition} from "../../model/Condition";
import {Language} from "../../model/Language";
import {Card} from "../../model/Card";
import {Location} from "@angular/common";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute, private location: Location) { }

  @Input()
  mySelectedArticle?: Article;

  ngOnInit(): void {
  }

  articleForm: FormGroup = this.fb.group({
    price: [this.mySelectedArticle?.price, [Validators.required, Validators.min(0.01), Validators.pattern("\^([\\d]{0,4})(\\.|$)([\\d]{2,2}|)$")]],
    condition: [Condition.MINT, [Validators.required]],
    language: [Language.ENGLISH, [Validators.required]],
  });

  updateArticle() {
    if(this.articleForm.invalid) return;

    const articleBackend: Article = {
      ...this.mySelectedArticle,
      ...this.articleForm.value,
      // card: this.mySelectedArticle?.card,
      // id: this.mySelectedArticle?.id
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
