import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostArticleComponent } from './post-article/post-article.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PokemoncardComponent } from './card_illustration/pokemoncard/pokemoncard.component';
import { ArticleComponent } from './article/article.component';
import { TrainercardComponent } from './card_illustration/trainercard/trainercard.component';
import { EnergycardComponent } from './card_illustration/energycard/energycard.component';

@NgModule({
  declarations: [
    AppComponent,
    PostArticleComponent,
    PokemoncardComponent,
    ArticleComponent,
    TrainercardComponent,
    EnergycardComponent
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
