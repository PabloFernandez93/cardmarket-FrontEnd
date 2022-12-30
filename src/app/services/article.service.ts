import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../model/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl:string = "http://localhost:8080/cardmarket/article";

  constructor(private httpClient: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl);
  }

  createArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.baseUrl, article)
  }

  deleteArticleById (id: number): Observable<Article[]> {
    return this.httpClient.delete<Article[]>(this.baseUrl + "/delete/" + id);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.httpClient.put<Article>(this.baseUrl, article);
  }

  getArticlesByCardId(id: number): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl+ "/all/" + id);
  }
}
