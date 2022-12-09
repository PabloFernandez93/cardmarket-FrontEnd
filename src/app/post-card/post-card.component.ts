import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  createCardForm: FormGroup = this.fb.group({
    price: new FormControl(''),
    condition: new FormControl(''),
    language: new FormControl(''),
    pokemonId: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  submitPokemon() {

  }
}
