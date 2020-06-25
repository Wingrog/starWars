import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  // Attribut de type planete qui n'est pas initialisée.
  // Cet attribut nous servira dans notre planet-detail.component.html afin d'afficher les détails de notre planète.

  planet: Planet;
  // On injecte ici 2 dépendances dans notre constructor ActivatedRoute qui va permettre de récupérer des informations de la requete Http.
  // Dans ces informations on pourra retrouver l'id passé dans notre url (planets/1 ou l'on pourra récupérer par exemple 1 correspondant à l'id de notre planète).
  // Le service ActivatedRoute sera importé depuis @angular/Router.
  // Injection de notre planeteService
  constructor(private route: ActivatedRoute, private PlanetService: PlanetService) { }



  isLoading: boolean;

  ngOnInit(): void {
    // On récupère notre ID dans l'URL gràace au service ActivatedRoute
    // const id = parseInt(this.route.snapshot.paramMap.get('id')); //pour récupérer l'ID de l'URL
    // On initialise notre attribut planet grâce à notre PlanetService et à la constante ID récupérée au dessus que l'on passera en paramètre)
    // this.planet = this.PlanetService.getOnePlanetById(id);



    // METHODE SERVEUR BACK END POUR AFFICHER LA PLANETE SELON SON ID
    this.isLoading = true;
    this.PlanetService.getOnePlanet(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((data:
      Planet) => {
      this.planet = data;
      this.isLoading = false;
    });




  }
}
