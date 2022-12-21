import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {Language} from "../../model/Language";
import {LiteralArray} from "@angular/compiler";
import {Condition} from "../../model/Condition";
import {CardService} from "../../services/card.service";
import {Card} from "../../model/Card";

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {

  cards?: Card[];

  mySelectedCard?: Card;

  articleForm: FormGroup = this.fb.group({
    price: [null, [Validators.required, Validators.min(0.01)]],
    condition: [Condition.MINT, [Validators.required]],
    language: [Language.ENGLISH, [Validators.required]],
    // card: this.fb.group({
    //   name: ['', [Validators.required]]
    // })
  });

  constructor(private cardService: CardService, private articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe(cards => this.cards = cards)
  }

  get priceControl() {
    return this.articleForm.get("price")
  }

  submitArticle() {
    if(this.articleForm.invalid) return;

    const articleBackend: Article = {
      ...this.articleForm.value,
    }

    this.articleService.createArticle(articleBackend).subscribe(a => {
      alert("Added Article to sell");
    })
  }

  addCardId(id:number):void {
    this.articleForm.get("card")?.get("id")?.setValue(id);
  }

  selectedCard(card: Card) {
    this.mySelectedCard = card;
  }

  get languageEnum() {
    return Object.keys(Language).filter(key => isNaN(Number(key)));
  }

  get conditionEnum() {
    return Object.keys(Condition).filter(key => isNaN(Number(key)));
  }


}
