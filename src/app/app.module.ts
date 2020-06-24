import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'; //pour utiliser les notifications avec le ToastrModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauxDetailComponent } from './components/vaisseaux-detail/vaisseaux-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { FormsModule } from '@angular/forms'; //pour utiliser les formulaires
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InitialPipe } from './pipes/initial.pipe'; //ajout de notre pipe personnalisée
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


// Angular est très complet, on ne va pas donc tout charger tout le code source pour une application, ça serait trop lourd.
// Le fichier app.module va nous permettre de charger seulement les composants, services, pipes, modules, que l'on souhaite utiliser.
// Tous composants et Pipes devront être inscris dans la section déclaration, sinon ils ne seront pas utilisables.
// Toutes les librairies devront être ajoutées dans la section import pour être utilisées (Exemple).

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    VaisseauxComponent,
    MenuComponent,
    PlanetDetailComponent,
    VaisseauxDetailComponent,
    AddPlanetComponent,
    AddVaisseauComponent,
    PageNotFoundComponent,
    InitialPipe,
    EditPlanetComponent,
    EditVaisseauComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, //pour utiliser les formulaires
    ToastrModule.forRoot(), //pour utiliser les notifications
    HttpClientModule, //pour le back end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
