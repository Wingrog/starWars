import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  date = new Date(); // ajout d'une variable pour afficher la date

  constructor() { }

  ngOnInit(): void {
  }

}
