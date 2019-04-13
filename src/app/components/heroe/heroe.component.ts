import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfeaces/heroe';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass']
})
export class HeroeComponent implements OnInit {
  forma: FormGroup;

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marbel'
  };

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.forma);
    console.log(this.heroe);
  }

}
