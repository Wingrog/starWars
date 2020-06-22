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
    return this.planets;
  }

  getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet => planet.id === id)[0];

  }

  addPlanet(planet: Planet): void {
    this.planets.push(planet) // on va push dans le tableau
  }
}
