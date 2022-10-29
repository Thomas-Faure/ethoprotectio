import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FormsModule } from '@angular/forms';

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
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { ConnaitreComponent } from './pages/connaitre/connaitre.component';

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
    ComingSoonComponent,
    ContactComponent,
    PrestationsComponent,
    ConnaitreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
