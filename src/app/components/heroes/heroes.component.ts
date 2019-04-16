import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroeStack: any[] = [];

  constructor(public service: HeroesService) {
    this.service.getHeroes()
      .subscribe( (data: any) => {
        this.heroeStack = data;
      })
   }

  ngOnInit() {}

  borrarHeroe(key$: string) {
    this.service.borrarHeroe(key$)
      .subscribe( data => {
        if (data === null) {
          delete this.heroeStack[key$]
        }
        console.log(this.heroeStack.length);
        })
  }

  getHeroes() {
    this.service.getHeroes()
    .subscribe( (data: any) => this.heroeStack = data);
  }

}
