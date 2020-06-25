import { Component, OnInit } from '@angular/core';
import { VaisseauService } from '../../services/vaisseau.service';
import { Vaisseau } from '../../models/vaisseau';
import { LoggerService } from 'src/app/services/logger.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css'],
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService, private loggerService: LoggerService, private toastr: ToastrService) { } //on injecte ce que l'on va utiliser

  isLoading: boolean;

  ngOnInit(): void {

    this.loggerService.loaderService(); //on lance la fonction loaderService qui se trovue dans le LoggerService

    this.isLoading = true;
    this.vaisseauService.getVaisseaux().subscribe((data: Vaisseau[]) => {
      this.vaisseaux = data;
      this.isLoading = false;
    })
  }

  deleteVaisseau(id: number): void {
    this.isLoading = true;
    this.vaisseauService.deleteVaisseau(id).subscribe(then => {
      this.vaisseauService.getVaisseaux().subscribe((data: Vaisseau[]) => {
        this.vaisseaux = data;
        this.isLoading = false;
        this.toastr.error("Le vaisseau à été supprimé !"); //on affiche la notification
      });
    })
  }

}
