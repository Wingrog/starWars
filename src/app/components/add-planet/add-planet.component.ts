import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
  // Attribut planet qui est initialisé à new Planet().
  // Car nous voulons créer une instane planète et partir d'une feuille blanche.
  planet = new Planet();

  // Nous injectons le planetService qui nous servira pour ajouter notre planète dans nos données.
  // Router on l'injecte pour rediriger notre utilisateur.
  // On injecte également le service ToastrService pour afficher une notification à l'utilisateur.
  constructor(private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitPlanet(): void {
    console.log(this.planet); // Renvoi bien notre nouvelle planete.
    // On appel notre service pour sauvegarder les données du formulaire via l'attribut planet du composant.
    this.planetService.addPlanet(this.planet);
    // On redirige l'utilisateur vers la liste des planètes qui devra avoir une élement en plus.
    this.router.navigate(['/planets']);
    // On envoit une notification à l'utilisateur.
    this.toastr.success("La planète à bien été ajoutée !");
  }

}
