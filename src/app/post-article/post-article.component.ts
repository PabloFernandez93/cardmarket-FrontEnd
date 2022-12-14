import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-article-card',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {

  articleForm: FormGroup = this.fb.group({
    price: [0, [Validators.required, Validators.min(0)]],
    condition: ['', Validators.required],
    language: ['', Validators.required],
    cardId: [0]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  submitPokemon() {

  }
}
