import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { MesRecettesComponent } from './pages/mes-recettes/mes-recettes.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { CalculateurComponent } from './pages/calculateur/calculateur.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    MesRecettesComponent,
    UtilisateursComponent,
    IngredientsComponent,
    CalculateurComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
