import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostArticleComponent} from "./post-article/post-article.component";

const routes: Routes = [
  {path: "post", component: PostArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
