import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokenews',
  templateUrl: './pokenews.component.html',
  styleUrls: ['./pokenews.component.css']
})
export class PokenewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    window.open('https://www.pokemon.com/us/pokemon-news/mewtwo-vstar-rotom-vstar-and-more-in-pokemon-tcg-crown-zenith', '_blank');
  }
}
