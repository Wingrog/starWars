import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

  vaisseau: Vaisseau;

  constructor() { }

  ngOnInit(): void {
    this.vaisseau = new Vaisseau();
  }

  submitVaisseau(): void {
    console.log(this.vaisseau)
  }

}
