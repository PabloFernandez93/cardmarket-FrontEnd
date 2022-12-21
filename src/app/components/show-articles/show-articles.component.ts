import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
