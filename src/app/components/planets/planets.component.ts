import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from 'src/app/models/planet';
import { LoggerService } from 'src/app/services/logger.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];
  constructor(private planetService: PlanetService, private loggerService: LoggerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.planets = this.planetService.getAllPlanets();
    this.loggerService.loaderService();
  }

  deletePlanet(planet: Planet) {
    this.planets = this.planetService.deletePlanet(planet); //on lance la fonction deletePlanet qui se trouve dans le PlanetService
    this.toastr.error("La planète " + planet.nom + " à été supprimée!"); //on affiche la notification !

  }

}
