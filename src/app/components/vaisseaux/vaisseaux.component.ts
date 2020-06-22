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
  constructor(private vaisseauService: VaisseauService, private loggerService: LoggerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vaisseaux = this.vaisseauService.getAllVehiculs();
    this.loggerService.loaderService();
  }

  deleteVaisseau(vaisseau: Vaisseau) {
    this.vaisseaux = this.vaisseauService.deleteVaisseau(vaisseau);
    this.toastr.error("Le vaisseau " + vaisseau.nom + " à été supprimé!");

  }
}
