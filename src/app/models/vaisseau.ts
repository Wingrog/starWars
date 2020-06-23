export class Vaisseau {
  id: number;
  nom: string;
  model: string;
  lightSpeed: boolean;
  nbPassenger: number;
  image: string;

  constructor($id: number = null, $nom: string = null, $model: string = null, $lightSpeed: boolean = null, $nbPassenger: number = null, $image: string = null) {
    this.id = $id;
    this.nom = $nom;
    this.model = $model;
    this.lightSpeed = $lightSpeed;
    this.nbPassenger = $nbPassenger;
    this.image = $image;
  }
}
