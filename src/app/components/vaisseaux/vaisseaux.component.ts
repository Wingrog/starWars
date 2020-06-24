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
    this.vaisseaux = this.vaisseauService.getAllVehiculs();
    this.loggerService.loaderService(); //on lance la fonction loaderService qui se trovue dans le LoggerService

    this.isLoading = true;
    this.vaisseauService.getVaisseaux().subscribe((data: Vaisseau[]) => {
      this.vaisseaux = data;
      this.isLoading = false;
    })
  }

  deleteVaisseau(vaisseau: Vaisseau) {
    this.vaisseaux = this.vaisseauService.deleteVaisseau(vaisseau); // on lance la fonction deleteVaisseau qui se trouve dans le VaisseauService
    this.toastr.error("Le vaisseau " + vaisseau.nom + " à été supprimé!"); //on affiche la notification

  }

}
