import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/Article";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {



  ngOnInit() {

  }

}
