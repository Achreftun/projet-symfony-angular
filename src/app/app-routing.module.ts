import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPersonneComponent } from './components/details-personne/details-personne.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: 'personne', component: PersonneComponent },
  { path: 'personne/:id', component: DetailsPersonneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
