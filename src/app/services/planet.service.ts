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

  deletePlanet(planet: Planet): Planet[] {
    // Actualise le tableau planet sans la planete rentrée en argument
    this.planets = this.planets.filter(planeteToDelete => planet !== planeteToDelete)
    return this.planets;
  }




  // SERVEUR BACK END

  constructor(private http: HttpClient) {
  }

  apiURL = 'http://localhost:3000/planet';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };

  // MESSAGE ERREUR SI PAS DE CONNEXION


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




  // MES FONCTIONS


  //RETOURNE TOUTES LES PLANETES

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiURL, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  // RETOURNE LA PLANETE SELON SON ID

  getOnePlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  // AJOUT DUNE PLANETE
  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiURL, planet, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // MODIFIER UNE PLANETE
  editPlanet(planet: Planet) {
    return this.http.put<Planet>(this.apiURL + '/' + planet.id, planet, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
