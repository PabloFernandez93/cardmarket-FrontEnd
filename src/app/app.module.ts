import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostArticleComponent } from './components/post-article/post-article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DefaultPipe } from './pipe/default.pipe';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowArticlesComponent } from './components/show-articles/show-articles.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ShowCardsComponent } from './components/show-cards/show-cards.component';
import { BuyArticleComponent } from './components/buy-article/buy-article.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/homepage/carousel/carousel.component';
import { PokenewsComponent } from './components/homepage/pokenews/pokenews.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { YoutubeVideoComponent } from './components/homepage/youtube-video/youtube-video.component';
import { RandomCardComponent } from './components/homepage/random-card/random-card.component';


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
    BuyArticleComponent,
    NavBarComponent,
    CarouselComponent,
    PokenewsComponent,
    YoutubeVideoComponent,
    RandomCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
