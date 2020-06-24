import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root',
})
export class PlanetService {

  // On a un attribut qui est initialisé avec un tableau d'objet Planet (models/planet.ts).
  // Le new Planet(...) appelera le constructor de notre modele planet afin de créer nos objets
  // Dans tous nos services, nous manipulerons cet attribut pour ajouter, supprimer, editer, récupérer une ou toutes nos planètes

  planets = [ //Ajout de nos instances dans un tableau planets
    new Planet(1, 'Aldebaran', 1.5, 'Jedi', 1986, "assets/images/aldebaran.jpg"),
    new Planet(2, 'Tatooine', 69, 'Empire', 2020, "assets/images/tatooine.png"),
  ];


  // Fonction qui retournera toutes nos planètes (celles qui sont contenu dans l'attribut planets).
  // On l'utilisera notamment dans le composant qui affichera toutes nos planètes (planets.component.ts)
  getAllPlanets(): Planet[] {
    return this.planets;
  }

  // Cette fonction qui prends en paramètre un id et qui retournera un objet Planet.
  getOnePlanetById(id: number): Planet {
    // La fonction filter va créer un nouveau tableau à partir d'une condition à vérifier.
    // La fonction filter retourne un tableau, l'id d'une planète est unique. Conclusion la fonction filter retournera donc un tableau avec un seul élément planete. Or notre fonction ne retourne pas un tableau avec un élément planete mais un objet planete. C'est pourquoi le 0 nous permet de retrouver ce premier objet.
    return this.planets.filter(planet => planet.id === id)[0];

  }

  // Cette fonction prends en parametre un objet planet.
  addPlanet(planet: Planet): void {
    // Ajoute cet élement dans notre attribut qui contient le tableau de planète.
    this.planets.push(planet)
  }

  deletePlanet(planet: Planet): Planet[] {
    // Actualise le tableau planet sans la planete rentrée en argument
    this.planets = this.planets.filter(planeteToDelete => planet !== planeteToDelete)
    return this.planets;
  }

  editPlanet(planet: Planet): Planet[] {
    // On récupère la planète en fonction de son id puis la met à jour.
    // Sauf que derrière on lui change sa valeure.
    this.planets.filter(planetUpdate => planet.id === planetUpdate.id)[0] = planet;
    return this.planets;
  }







  //Methode GET Serveur Back End


  constructor(private http: HttpClient) {
  }

  apiURL = 'http://localhost:3000/planet';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };



  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiURL, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

}
