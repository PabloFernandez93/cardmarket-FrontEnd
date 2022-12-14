import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Card} from "../model/Card";
import {CardService} from "../services/card.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  cardList$: Observable<Card[]> = this.cardService.getallCards();

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }



}
