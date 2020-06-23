export class Planet {
  public id: number;
  public nom: string;
  public nbHabitant: number;
  public allegiance: string;
  public nbKmTerre: number;
  public image: string;

  constructor($id: number = null, $nom: string = null, $nbHabitant: number = null, $allegiance: string = null, $nbKmTerre: number = null, $image: string = null) {
    this.id = $id;
    this.nom = $nom;
    this.nbHabitant = $nbHabitant;
    this.allegiance = $allegiance;
    this.nbKmTerre = $nbKmTerre;
    this.image = $image;
  }
};
