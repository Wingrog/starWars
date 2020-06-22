import { Component, OnInit } from '@angular/core';
import { VaisseauService } from '../../services/vaisseau.service';
import { Vaisseau } from '../../models/vaisseau';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css'],
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService, private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.vaisseaux = this.vaisseauService.getAllVehiculs();
    this.loggerService.loaderService();
  }

}
