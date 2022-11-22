import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import {ComingSoonComponent} from './pages/coming-soon/coming-soon.component'
import { ConnaitreComponent } from './pages/connaitre/connaitre.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactBisComponent } from './pages/contact-bis/contact-bis.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [

  { path: 'comingsoon', component: ComingSoonComponent, pathMatch: 'full' },
  { path: 'connaitre', component: ConnaitreComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'contactbis', component: ContactBisComponent, pathMatch: 'full' },
  { path: 'prestations', component: PrestationsComponent, pathMatch: 'full' },
  { path: 'mentions', component: MentionsComponent, pathMatch: 'full' },

  { path: '', component: AccueilComponent, pathMatch: 'full' },

  { path: '**', component: PageNotFoundComponent },

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled',scrollOffset: [0, 150]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }