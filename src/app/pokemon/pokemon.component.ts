import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Pokemon} from "../Pokemon.model";
import {CardService} from "../card.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonList$: Observable<Pokemon[]> = this.pokemonService.getAllPokemon();

  constructor(private pokemonService: CardService) { }

  ngOnInit(): void {
  }



}
