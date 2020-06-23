import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  // Fonction contenu dans mon loggerService qui affichera dans la console un message "coucou"
  loaderService(): void {
    console.log('Coucou');
  }
}
