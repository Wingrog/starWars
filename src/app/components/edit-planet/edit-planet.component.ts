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

  planet: Planet;

  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.planet = this.planetService.getOnePlanetById(id);
  }

  editPlanet(): void {
    this.planetService.editPlanet(this.planet);
    this.router.navigate(['/planets']);
    this.toastr.success("La planète à bien été modifiée !"); // on affiche la notification


  }

}
