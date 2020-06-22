import { Component, OnInit } from '@angular/core';
import { VaisseauService } from '../../services/vaisseau.service';
import { Vaisseau } from '../../models/vaisseau';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css'],
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService) {}

  ngOnInit(): void {
    this.vaisseaux = this.vaisseauService.getAllVehiculs();
  }
}
