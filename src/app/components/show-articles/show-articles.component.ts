import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/Article";

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  articleList: Article[] = [];
  filter: string = '';


  ngOnInit(): void {
    this.getArticle()
  }

  getArticle() {
    this.articleService.getAllArticles().subscribe(articles => this.articleList = articles);
  }

  filterArticles(articles: Article[]) {
    if (!this.filter) {
      return articles;
    }
    return articles.filter(article => article.card.name.toLowerCase().includes(this.filter.toLowerCase()))
  }

  placeholderArticle?: Article;

  transferArticle(article: Article) {
    this.placeholderArticle = article;
  }
}
