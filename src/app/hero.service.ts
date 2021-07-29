import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  async getHeroes(): Promise<Hero[]> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(HEROES);
      }, 5000);
    });

  }
}
