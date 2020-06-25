import { Component, OnInit } from '@angular/core';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // on importe ce service pour pouvoir utiliser la notification


@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {
  vaisseau: Vaisseau;

  constructor(private vaisseauService: VaisseauService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { } //on injecte ce que l'on va utiliser

  // Récupération de l'ID au chargement de la page
  ngOnInit(): void {
    this.isLoading = true;
    this.vaisseauService.getOneVaisseau(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: Vaisseau) => {
      this.vaisseau = data;
      this.isLoading = false;
    });
  }

  isLoading: boolean;
  // JE MODIFIE UN VAISSEAU
  editVaisseau(): void {
    this.isLoading = true;
    this.vaisseauService.editVaisseau(this.vaisseau).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/vaisseaux']); // Redirection de l'utilisateur
      this.toastr.success("Le vaisseau à bien été modifié !"); // On affiche une notification
    })
  }
}
