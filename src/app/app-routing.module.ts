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
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';

// Contient une constante appelés routes. Cette instance est un tableau qui permettra de lier une url à un composant. L'url sera contenu dans l'attribut path et le composant dans l'attribut component. Dans l'exeple ci-dessous, si mon urm est localhost:42000/vaisseaux, la balise <router-outlet> contenu dans le fichier app.component.html affichera le composant VaisseauComponent. On retrouve aussi une redirection afin de rediriger l'utilisateur vers /home quand il accède à localhost:42000.

// Fonctionnement du tableau de routes. Notre navigateur va passer dans chacune de ces lignes. Si l'attribut path fonctionne il affichera le composant, sinon il passera à la ligne suivante. Exemple : Sur l'adresse localhost:4200/planets/1 il ira jusqu'à la ligne { path: 'planets/:id', component: PlanetDetailComponent }, car aucun autre path ne correspond dans les lignes précédentes. C'est donc le composant PlanetDetail qui sera affiché.
// Les : derriere un "/" permettent de dire que l'on a à faire à une variable. Elle poura être récupérée dans notre composant grâce au service Angular ActivatedRoute

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vaisseaux', component: VaisseauxComponent },
  { path: 'vaisseaux/add', component: AddVaisseauComponent },
  { path: 'vaisseaux/:id', component: VaisseauxDetailComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/add', component: AddPlanetComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'planets/update/:id', component: EditPlanetComponent },
  { path: 'vaisseaux/update/:id', component: EditVaisseauComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
