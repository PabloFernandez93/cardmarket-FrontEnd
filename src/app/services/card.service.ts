import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../model/Card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.baseUrl + "cardmarket/card/getall");
  }


}
