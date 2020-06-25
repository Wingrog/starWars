import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

  vaisseau = new Vaisseau();

  constructor(private vaisseauService: VaisseauService, private router: Router, private toastr: ToastrService) { }

  isLoading: boolean;

  ngOnInit(): void {
  }


  // ENVOI DES DONNEES SUR SERVEUR BACK END
  submitVaisseau(): void {
    this.isLoading = true;
    this.vaisseauService.addVaisseau(this.vaisseau).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/vaisseaux']); // Redirection de l'utilisateur
      this.toastr.success("Le vaisseau à bien été ajouté !"); // On affiche une notification
    })
  }
}
