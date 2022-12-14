import { Component, OnInit } from '@angular/core';
import {CardService} from "../../services/card.service";
import {Observable} from "rxjs";
import {Card} from "../../model/Card";

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit {

  cardList$: Observable<Card[]> = this.cardService.getAll();

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
  }

}
