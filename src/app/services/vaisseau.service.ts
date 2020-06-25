import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VaisseauService {

  // Methode GET sur serveur Back-End

  constructor(private http: HttpClient) { }


  apiURL = 'http://localhost:3000/vaisseau';
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



  //LES FONCTIONS BACK END

  getVaisseaux(): Observable<Vaisseau[]> {
    return this.http.get<Vaisseau[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  // Je recupère un vaisseau selon son ID
  getOneVaisseau(id: number): Observable<Vaisseau> {
    return this.http.get<Vaisseau>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // AJOUTER UN VAISSEAU
  addVaisseau(vaisseau: Vaisseau): Observable<Vaisseau> {
    return this.http.post<Vaisseau>(this.apiURL, vaisseau, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // MODIFIER UN VAISSEAU
  editVaisseau(vaisseau: Vaisseau): Observable<Vaisseau> {
    return this.http.put<Vaisseau>(this.apiURL + '/' + vaisseau.id, vaisseau, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // SUPPRIMER UN VAISSEAU

  deleteVaisseau(id: number): Observable<Vaisseau> {
    return this.http.delete<Vaisseau>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }



}
