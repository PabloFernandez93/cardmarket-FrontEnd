import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "./Pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>("http://localhost:8080/pokemon/api/getall");
  }


}
