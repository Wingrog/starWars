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

  planet: Planet;
  constructor(private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.planet = new Planet();
  }

  submitPlanet(): void {
    console.log(this.planet); //renvoi bien notre nouvelle planete
    this.planetService.addPlanet(this.planet); //on utilise la fonction qui se trouve dans le service pour ajouter la planete
    this.router.navigate(['/planets']); // on redirige l'utilisateur sur la route planets
    this.toastr.success("La planète à bien été ajoutée !");

  }

}
