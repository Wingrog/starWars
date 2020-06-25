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


  // Ici nous récupérons note id puis nous assignons à this.planet la valeure de retour de notre fonction getOneById dans le service planetService en passant en parametre l'id récupéré.
  ngOnInit(): void {
    // const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.planet = this.planetService.getOnePlanetById(id);
  }

  editPlanet(): void {
    // Je met à jour le contenu de mes planètes dans mon service
    this.planetService.editPlanet(this.planet);
    // Je redirige l'utilisateur vers /home
    this.router.navigate(['/home']);
    this.toastr.success("La planète à bien été modifiée !"); // on affiche la notification


  }

}
