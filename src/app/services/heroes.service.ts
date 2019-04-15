import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfeaces/heroe';

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
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
    return this.http.put( `${this.heroesURL}/${key$}.json`, body, { headers } )
  }

  borrarHeroe(key$: string) {
    return this.http.delete(`${this.heroesURL}/${key$}.json`)
  }

  getHeroes() {
    return this.http.get(`${this.heroesURL}.json`)
  }

}
