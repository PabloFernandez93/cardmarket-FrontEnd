import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostArticleComponent} from "./components/post-article/post-article.component";
import {ShowArticlesComponent} from "./components/show-articles/show-articles.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {HomepageComponent} from "./components/homepage/homepage.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomepageComponent},
  {path: "post", component: PostArticleComponent},
  {path: "show-articles", component: ShowArticlesComponent},
  {path: "**", component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
