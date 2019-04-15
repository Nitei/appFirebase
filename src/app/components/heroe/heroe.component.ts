import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfeaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { format } from 'util';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marbel'
  };
  nuevo = false;
  id: string;

  constructor(
    private service: HeroesService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.params
        .subscribe( parametros => {
          this.id = parametros['id']
          if (parametros['nombre']) {
            this.heroe.nombre = parametros['nombre'];
          }
        })
    }

  ngOnInit() {
  }


  guardar() {
    if (this.id === 'nuevo') {
      // insertando
      this.service.nuevoHeroe( this.heroe )
        .subscribe( (data: any) => {
          this.router.navigate(['/heroe'], data.name)
          console.log(data);
        }, error => console.log(error))
    } else {
      // actualizando
      this.service.actualizarHeroe( this.heroe, this.id )
        .subscribe( (data: any) => {
          this.router.navigate(['/heroe'], data.name)
          console.log(data);
        }, error => console.log(error));
    }
  }

  nuevoHeroe(form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo'])
    form.reset({
      casa: 'Marbel'
    });

  }

}
