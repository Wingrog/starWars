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

  submitVaisseau(): void {
    this.vaisseauService.addVaisseau(this.vaisseau).subscribe(then => {
      this.router.navigate(['/vaisseaux']);
      this.toastr.success("Le vaisseau à bien été ajouté !"); // on affiche la notification
    })
  }
}
