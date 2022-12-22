import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostArticleComponent } from './components/post-article/post-article.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ArticleComponent } from './components/article/article.component';
import { DefaultPipe } from './pipe/default.pipe';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowArticlesComponent } from './components/show-articles/show-articles.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostArticleComponent,
    ArticleComponent,
    DefaultPipe,
    HomepageComponent,
    ShowArticlesComponent,
    UpdateArticleComponent,
    FooterComponent,
    ErrorPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
