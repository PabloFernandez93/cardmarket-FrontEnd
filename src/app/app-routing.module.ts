import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostArticleComponent} from "./components/post-article/post-article.component";
import {ShowArticlesComponent} from "./components/show-articles/show-articles.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ArticleDetailsComponent} from "./components/article-details/article-details.component";
import {ShowCardsComponent} from "./components/show-cards/show-cards.component";
import {BuyArticleComponent} from "./components/buy-article/buy-article.component";


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomepageComponent},
  {path: "post", component: PostArticleComponent},
  {path: "show-articles", component: ShowArticlesComponent},
  {path: "article-details/:id", component: ArticleDetailsComponent},
  {path: "show-cards", component: ShowCardsComponent},
  {path: "buy-article", component: BuyArticleComponent},
  {path: "**", component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
