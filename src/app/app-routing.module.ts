import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueursComponent } from './add-joueurs/add-joueurs.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { joueurGuard } from './joueur.guard';
import { RechercheParPositionComponent } from './recherche-par-position/recherche-par-position.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  {path: "joueurs", component : JoueursComponent},
  {path:"add-joueurs",component:AddJoueursComponent,canActivate:[joueurGuard]},
  {path: "updatejoueur/:id", component: UpdateJoueurComponent},
  {path: 'login', component: LoginComponent},
  {path: "rechercheParPosition", component : RechercheParPositionComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
