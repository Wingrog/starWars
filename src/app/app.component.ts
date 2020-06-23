import { Component } from '@angular/core';


// @Component : Décorateur qui permet à Angular de comprendre que l'on à a faire à un composant dans ce fichier, on retrouve 3 élements :
// Le selector : Nom de la balise HTML qui pourra être utilisé par angular pour appeler ce composan. C'est pourquoi on retrouve cette balise dans le fichier index.html.
// templateUrl : Sert à définir le fichier qui servira de template (le rendu final en HTML). Ce template pourra faire appel aux attributs et fonctions de ce composant.
//styleUrls : Tableau de nom de fichier qui seront destinés à contenir le css de ce composant. Ces fichiers de style ne seront pas pris en compte dans un autre composant.
// AppComponent : C'est le composant principal de notre application, il embarquera tous les composants à afficher.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starWars';
}
