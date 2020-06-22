import { Component, OnInit } from '@angular/core';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {
  vaisseau: Vaisseau;

  constructor(private vaisseauService: VaisseauService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { } //on injecte ce que l'on va utiliser

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); //pour récupérer l'ID de l'URL
    this.vaisseau = this.vaisseauService.getOneVehiculsById(id); //on recupere le vaisseau en fonction de son ID
  }


  editVaisseau(): void {
    this.vaisseauService.editVaisseau(this.vaisseau);
    this.router.navigate(['/vaisseaux']); //pour rediriger l'utilisateur
    this.toastr.success("Le vaisseau à bien été modifiée !"); // on affiche la notification !
  }
}
