import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { ConnaitreComponent } from './pages/connaitre/connaitre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastsContainer } from './components/toasts-container/toasts-container.component';
import { ContactBisComponent } from './pages/contact-bis/contact-bis.component';
import { MentionsComponent } from './mentions/mentions.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccueilComponent,
    ComingSoonComponent,
    ContactComponent,
    PrestationsComponent,
    ConnaitreComponent,
    ToastsContainer,
    ContactBisComponent,
    MentionsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
