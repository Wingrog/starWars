import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
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
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
