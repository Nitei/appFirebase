import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { map } from 'rxjs/operators';

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
        console.log(data);
        this.heroeStack = data;
      })
   }

  ngOnInit() {

  }

  getHeroes() {
    this.service.getHeroes()
    .pipe(
      map( (x: any)=> {
        this.heroeStack = x
        console.log(x);
      })
      )
    .subscribe();
  }

}
