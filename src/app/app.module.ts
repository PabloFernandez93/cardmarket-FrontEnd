import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostArticleComponent } from './components/post-article/post-article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DefaultPipe } from './pipe/default.pipe';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowArticlesComponent } from './components/show-articles/show-articles.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ShowCardsComponent } from './components/show-cards/show-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    PostArticleComponent,
    DefaultPipe,
    HomepageComponent,
    ShowArticlesComponent,
    UpdateArticleComponent,
    FooterComponent,
    ErrorPageComponent,
    ArticleDetailsComponent,
    ShowCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
