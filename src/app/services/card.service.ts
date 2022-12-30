import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../model/Card";
import {Article} from "../model/Article";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl: string = "http://localhost:8080/cardmarket/cards";

  constructor(private httpClient: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.baseUrl);
  }

  getRandomCard(): Observable<Card> {
    return this.httpClient.get<Card>(this.baseUrl + "/random")
  }
}
