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
  // planets : Il s'agit d'un attribut qui contiendra un tableau de planète. Il n'est pas encore iniatialisé.
  // Cet attribut est vide (undefined) mais ne pourra contenir qu'un tableau de planète.
  planets: Planet[];

  // Nous injectons ici notre planetService qui nous servira pour récupérer toutes nos planètes.
  // Nous injectons également le ToastrService pour afficher des notifications aux visiteurs.
  constructor(private planetService: PlanetService, private loggerService: LoggerService, private toastr: ToastrService) { }

  isLoading: boolean;

  ngOnInit(): void {
    //Methode Local

    // Nous initialisons notre attribut planets (this.planets) en lui assignant le tableau de planètes contenu dans planet.service.ts.
    // this.planets = this.planetService.getAllPlanets();
    // this.loggerService.loaderService();


    //Methode GET Back End pour récupérer toutes mes planètes

    this.isLoading = true;
    this.planetService.getPlanets().subscribe((data: Planet[]) => {
      this.planets = data;
      this.isLoading = false;
    });

    console.log("Ici je demande mes données");
    this.planetService.getPlanets().subscribe(data => {
      this.planets = data;
      console.log("C'est ok, je récupère les données !");
    })
  }


  //FONCTIONS


  // Fonction appelé lors d'une action de clique (click) sur un lien contenu dans le fichier planets.component.html
  deletePlanet(planet: Planet) {
    console.log("A faire");
  }



}
