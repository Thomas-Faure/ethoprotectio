import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ErrorAnimationComponent } from './animations/error-animation/error-animation.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoadingAnimationComponent } from './animations/loading-animation/loading-animation.component';
import { AcceuilAnimationComponent } from './animations/acceuil-animation/acceuil-animation.component';
import { TypingAnimationComponent } from './animations/typing-animation/typing-animation.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ErrorAnimationComponent,
    AccueilComponent,
    LoadingAnimationComponent,
    AcceuilAnimationComponent,
    TypingAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
