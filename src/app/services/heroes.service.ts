import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfeaces/heroe';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesURL = 'https://hero-6ade2.firebaseio.com/heroes';
  public heroesStack: [];
  id: string;

  constructor(private http: HttpClient) {
   }


  nuevoHeroe( heroe: Heroe ) {

    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post( `${this.heroesURL}.json`, body, { headers } )
    .pipe(
      map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {

    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put( `${this.heroesURL}/${key$}.json`, body, { headers } )
    .pipe(
      map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  getHeroes() {
    return this.http.get(`${this.heroesURL}.json`)
  }

  getHeroe(key$?: string) {
    return this.http.get(`${this.heroesURL}/${key$}.json`)
      .pipe(map(res => res))
  }
}
