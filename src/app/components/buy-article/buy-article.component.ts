import {Component, OnInit, LOCALE_ID, Inject} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";
import {ActivatedRoute} from "@angular/router";
import {formatCurrency, Location} from "@angular/common";


@Component({
  selector: 'app-buy-article',
  templateUrl: './buy-article.component.html',
  styleUrls: ['./buy-article.component.css']
})
export class BuyArticleComponent implements OnInit {

  articleList: Article[] = [];

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private location: Location, @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this.articleService.getArticlesByCardId(Number.parseInt(id))
        .subscribe(articles => this.articleList = articles)
    }
  }

  buyArticle(id: number, name: string, price: number) {
    if (window.confirm('Are sure you want to buy ' + name.toUpperCase() + ' for the price of ' + formatCurrency(price, this.locale, '€') + '?')) {
      this.articleService.deleteArticleById(id).subscribe(val => {
        alert("Congratulations! You bought " + name.toUpperCase() + "!");
        this.location.back()
      });
    }
  }

  goBack() {
    this.location.back()
  }
}
