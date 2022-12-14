import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostArticleComponent } from './post-article/post-article.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PokemonComponent } from './pokemon/pokemon.component';
import {HttpClientModule} from "@angular/common/http";
import { PokemoncardComponent } from './card_illustration/pokemoncard/pokemoncard.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    PostArticleComponent,
    PokemonComponent,
    PokemoncardComponent,
    ArticleComponent
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
