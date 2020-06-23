import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {

  // On a un attribut qui est initialisé avec un tableau d'objet Planet (models/planet.ts).
  // Le new Planet(...) appelera le constructor de notre modele planet afin de créer nos objets
  // Dans tous nos services, nous manipulerons cet attribut pour ajouter, supprimer, editer, récupérer une ou toutes nos planètes

  planets = [ //Ajout de nos instances dans un tableau planets
    new Planet(1, 'Aldebaran', 1.5, 'Jedi', 1986, "assets/images/aldebaran.jpg"),
    new Planet(2, 'Tatooine', 69, 'Empire', 2020, "assets/images/tatooine.png"),
  ];
  constructor() { }

  // Fonction qui retournera toutes nos planètes (celles qui sont contenu dans l'attribut planets).
  // On l'utilisera notamment dans le composant qui affichera toutes nos planètes (planets.component.ts)
  getAllPlanets(): Planet[] {
    return this.planets;
  }

  // Cette fonction qui prends en paramètre un id et qui retournera un objet Planet.
  getOnePlanetById(id: number): Planet {
    // La fonction filter va créer un nouveau tableau à partir d'une condition à vérifier.
    // La fonction filter retourne un tableau, l'id d'une planète est unique. Conclusion la fonction filter retournera donc un tableau avec un seul élément planete. Or notre fonction ne retourne pas un tableau avec un élément planete mais un objet planete. C'est pourquoi le 0 nous permet de retrouver ce premier objet.
    return this.planets.filter(planet => planet.id === id)[0];

  }

  // Cette fonction prends en parametre un objet planet.
  addPlanet(planet: Planet): void {
    // Ajoute cet élement dans notre attribut qui contient le tableau de planète.
    this.planets.push(planet)
  }

  deletePlanet(planet: Planet): Planet[] {
    // Actualise le tableau planet sans la planete rentrée en argument
    this.planets = this.planets.filter(planeteToDelete => planet !== planeteToDelete)
    return this.planets;
  }

  editPlanet(planet: Planet): Planet[] {
    // On edite la planète selectionnée
    this.planets.filter(planetUpdate => planet === planetUpdate)[0] = planet;
    return this.planets;
  }
}
