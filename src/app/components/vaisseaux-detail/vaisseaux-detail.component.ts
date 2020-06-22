import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vaisseaux-detail',
  templateUrl: './vaisseaux-detail.component.html',
  styleUrls: ['./vaisseaux-detail.component.css']
})
export class VaisseauxDetailComponent implements OnInit {

  id: number;
  vehiculs: Vaisseau;
  constructor(private route: ActivatedRoute, private VaisseauService: VaisseauService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.vehiculs = this.VaisseauService.getOneVehiculsById(this.id);
  }
}
