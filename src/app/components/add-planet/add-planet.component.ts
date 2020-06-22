import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

  planet: Planet;
  constructor() { }

  ngOnInit(): void {
    this.planet = new Planet();
  }

  submitPlanet(): void {
    console.log(this.planet);
  }

}
