import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';

@Injectable({
  providedIn: 'root',
})
export class VaisseauService {
  vehiculs = [
    new Vaisseau(1, 'Faucon Millenium', 'Audi', true, 300, "assets/images/fb_faucon.jpg"),
    new Vaisseau(2, 'X-Wing', 'Bmw', false, 2, "assets/images/xwing.jpg"),
  ];
  constructor() { }
  getAllVehiculs(): Vaisseau[] {
    return this.vehiculs;
  }

  getOneVehiculsById(id: number): Vaisseau {
    return this.vehiculs.filter(vehiculs => vehiculs.id === id)[0];

  }

  addVaisseau(vaisseau: Vaisseau): void {
    this.vehiculs.push(vaisseau); // on ajoute le vaisseau dans le tableau vehiculs
  }

  deleteVaisseau(vehiculs: Vaisseau): Vaisseau[] {
    this.vehiculs = this.vehiculs.filter(vaisseauToDelete => vehiculs !== vaisseauToDelete) //on supprime le vaisseau sélectionnée
    return this.vehiculs;
  }

  editVaisseau(vaisseau: Vaisseau): Vaisseau[] {
    this.vehiculs.filter(vaisseauUpdate => vaisseau === vaisseauUpdate)[0] = vaisseau; //on edite le vaisseau sélectionné
    return this.vehiculs;
  }
}
