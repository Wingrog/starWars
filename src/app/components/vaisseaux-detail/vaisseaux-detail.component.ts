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
  constructor(private route: ActivatedRoute, private VaisseauService: VaisseauService) { } //on injecte ce que l'on va utiliser


  isLoading: boolean;
  ngOnInit(): void {
    // this.id = parseInt(this.route.snapshot.paramMap.get('id')); //recuperer l'id qui se trouve dans l'url
    // this.vehiculs = this.VaisseauService.getOneVehiculsById(this.id); //recuperer un vehicule en fonction de son id


    // Je recupere le vaisseau selon son ID sur le serveur Back END

    this.isLoading = true;
    this.VaisseauService.getOneVaisseau(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((data:
      Vaisseau) => {
      this.vehiculs = data;
      this.isLoading = false;
    });
  }



}
