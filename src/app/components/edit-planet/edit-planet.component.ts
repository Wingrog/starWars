import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

  // Attribut planet que l'on branchera à notre formulaire.
  // En revanche on initialise pas cette variable avec new Planet() car on ne veut pas en créer une nouvelle.
  // Elle sera ajoutée dans la fonction ngOnInit(), elle sera utilisé dans notre html dans le ngModel.
  planet: Planet;

  // 3 injections activatedRoute afin de récupérer l'id dans notre URL.
  // planetService pour mettre à jour nos objets.
  // Router pour rediriger l'utilisateur.
  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  isLoading: boolean;
  // JE MODIFIE UNE PLANETE
  editPlanet(): void {
    this.isLoading = true;
    this.planetService.editPlanet(this.planet).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/planets']);
    })
  }

}
