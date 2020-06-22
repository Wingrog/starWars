import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  loaderService(): void {
    console.log('Coucou');
  }
}
