import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";
import {Language} from "../../model/Language";
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
    price: ['', [Validators.required, Validators.min(0.01), Validators.pattern("\^([\\d]{0,4})(\\.|$)([\\d]{1,2}|)$")]],
    condition: [0, [Validators.required]],
    language: [0, [Validators.required]],
  });

  constructor(private cardService: CardService, private articleService: ArticleService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe(cards => this.cards = cards)
  }

  get priceControl() {
    return this.articleForm.get("price")
  }

  submitArticle() {
    if (this.articleForm.invalid) return;

    const articleBackend: Article = {
      ...this.articleForm.value,
      card: this.mySelectedCard
    }

    console.log(articleBackend)
    this.articleService.createArticle(articleBackend).subscribe(a => {
      alert("Added Article " + articleBackend.card.name.toUpperCase() + " to your Cards");
    })
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
