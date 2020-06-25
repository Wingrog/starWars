import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root',
})
export class PlanetService {


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
    return this.http.get<Planet>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // AJOUTE DUNE PLANETE

  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiURL, planet, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  // MODIFIER UNE PLANETE

  editPlanet(planet: Planet): Observable<Planet> {
    return this.http.put<Planet>(this.apiURL + '/' + planet.id, planet, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

}
