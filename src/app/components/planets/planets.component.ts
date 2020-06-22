import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from 'src/app/models/planet';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];
  constructor(private planetService: PlanetService, private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.planets = this.planetService.getAllPlanets();
    this.loggerService.loaderService();
  }
}
