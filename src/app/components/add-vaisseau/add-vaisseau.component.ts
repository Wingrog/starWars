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

  vaisseau: Vaisseau;

  constructor(private vaisseauService: VaisseauService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vaisseau = new Vaisseau();
  }

  submitVaisseau(): void {
    console.log(this.vaisseau)  //renvoit bien notre nouveau vaisseau
    this.vaisseauService.addVaisseau(this.vaisseau); // on va lancer la fonction qui se trouve dans le service pour ajouter le vaisseau
    this.router.navigate(['/vaisseaux']); // on redirige l'utilisateur sur la root
    this.toastr.success("Le vaisseau à bien été ajouté !"); // on affiche la notification
  }

}
