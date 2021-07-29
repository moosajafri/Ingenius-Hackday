import { Injectable } from '@angular/core';
import { Hero } from '../../app/interfaces/hero';
import { HEROES } from '../../app/mock-data/mock-heroes';
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
