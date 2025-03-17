import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { MesRecettesComponent } from './pages/mes-recettes/mes-recettes.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { CalculateurComponent } from './pages/calculateur/calculateur.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'mes-recettes', component: MesRecettesComponent},
  { path: 'calculateur', component: CalculateurComponent},
  { path: 'users', component: UtilisateursComponent},
  { path: 'ingredients', component: IngredientsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
