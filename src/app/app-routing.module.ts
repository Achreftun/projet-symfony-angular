import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DetailsPersonneComponent } from './components/details-personne/details-personne.component';
import { PersonneComponent } from './components/personne/personne.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'personne', component: PersonneComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'personne/:id', component: DetailsPersonneComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
