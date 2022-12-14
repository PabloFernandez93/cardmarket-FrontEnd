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

  cardList$: Observable<Card[]>;

  constructor(private cardService:CardService) {
    this.cardList$ = this.cardService.getAll();
  }

  ngOnInit(): void {
  }

}
