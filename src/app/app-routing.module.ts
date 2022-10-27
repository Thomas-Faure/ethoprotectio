import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccueilComponent } from './pages/accueil/accueil.component';


const routes: Routes = [

  { path: '', component: AccueilComponent, pathMatch: 'full' },


  { path: '**', component: PageNotFoundComponent },

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }