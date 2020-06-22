import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  planets = [
    new Planet(1, 'Aldebaran', 1.5, 'Jedi', 1986, "assets/images/aldebaran.jpg"),
    new Planet(2, 'Tatooine', 69, 'Empire', 2020, "assets/images/tatooine.png"),
  ];
  constructor() { }
  getAllPlanets(): Planet[] {
    return this.planets; //retourne toutes nos planètes
  }

  getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet => planet.id === id)[0]; //retour une seule planete selon l'ID

  }

  addPlanet(planet: Planet): void {
    this.planets.push(planet) // on va push dans le tableau une planete
  }

  deletePlanet(planet: Planet): Planet[] {
    this.planets = this.planets.filter(planeteToDelete => planet !== planeteToDelete) //Actualise le tableau planet sans la planete rentrée en argument
    return this.planets;
  }

  editPlanet(planet: Planet): Planet[] {
    this.planets.filter(planetUpdate => planet === planetUpdate)[0] = planet; //on edite la planète selectionnée
    return this.planets;
  }
}
