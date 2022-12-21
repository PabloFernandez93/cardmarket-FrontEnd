import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostArticleComponent} from "./components/post-article/post-article.component";
import {ShowArticlesComponent} from "./components/show-articles/show-articles.component";

const routes: Routes = [
  {path: "post", component: PostArticleComponent},
  {path: "show-articles", component: ShowArticlesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
