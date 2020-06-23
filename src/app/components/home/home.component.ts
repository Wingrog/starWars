import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Le constructor permet d'injecter les services que nous utiliserons dans nos composants
  // Autrement dit dans ce composant sera injecté mon service LoggerService
  constructor(private loggerService: LoggerService) { }

  // Ici j'appel la fonction loaderService contenu dans le service loggerService
  // La fonction ngOnInit permet d'effetuer une action après le chargement de la page.
  ngOnInit(): void {
    this.loggerService.loaderService();
  }

}
