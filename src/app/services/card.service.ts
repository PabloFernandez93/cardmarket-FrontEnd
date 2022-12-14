import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../model/Card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl:string = "http://localhost:8080/cardmarket/card";

  constructor(private httpClient: HttpClient) { }

  getallCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.baseUrl + "/getall");
  }

  getCardbyId(id: number): Observable<Card> {
    return this.httpClient.get<Card>(this.baseUrl + "/getcard/" + id)
  }


}
