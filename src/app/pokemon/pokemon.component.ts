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

  pokemonList$: Observable<Card[]> = this.pokemonService.getAll();

  constructor(private pokemonService: CardService) { }

  ngOnInit(): void {
  }



}
