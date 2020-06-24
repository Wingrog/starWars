import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VaisseauService {
  vehiculs = [ //Ajout de nos instances dans un tableau vehiculs
    new Vaisseau(1, 'Faucon Millenium', 'Audi', true, 300, "assets/images/fb_faucon.jpg"),
    new Vaisseau(2, 'X-Wing', 'Bmw', false, 2, "assets/images/xwing.jpg"),
  ];


  apiURL = 'http://localhost:3000/vaisseau';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };

  constructor(private http: HttpClient) { }
  getAllVehiculs(): Vaisseau[] {
    return this.vehiculs; //Fonction qui va retourner tous nos vaisseaux
  }

  getOneVehiculsById(id: number): Vaisseau {
    return this.vehiculs.filter(vehiculs => vehiculs.id === id)[0]; //retourne un seul vaisseau selon l'id

  }

  addVaisseau(vaisseau: Vaisseau): void {
    this.vehiculs.push(vaisseau); //on ajoute le vaisseau dans le tableau vehiculs
  }

  deleteVaisseau(vehiculs: Vaisseau): Vaisseau[] {
    this.vehiculs = this.vehiculs.filter(vaisseauToDelete => vehiculs !== vaisseauToDelete) //on supprime le vaisseau sélectionnée
    return this.vehiculs; //on retourne le tableau
  }

  editVaisseau(vaisseau: Vaisseau): Vaisseau[] {
    this.vehiculs.filter(vaisseauUpdate => vaisseau === vaisseauUpdate)[0] = vaisseau; //on edite le vaisseau sélectionné
    return this.vehiculs;
  }


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

  getVaisseaux(): Observable<Vaisseau[]> {
    return this.http.get<Vaisseau[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
