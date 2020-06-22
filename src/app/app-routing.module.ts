import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauxDetailComponent } from './components/vaisseaux-detail/vaisseaux-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vaisseaux', component: VaisseauxComponent },
  { path: 'vaisseaux/add', component: AddVaisseauComponent },
  { path: 'vaisseau/:id', component: VaisseauxDetailComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/add', component: AddPlanetComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
