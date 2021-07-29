import { Injectable } from '@angular/core';
import { Hero } from '../../app/interfaces/hero';
import { HEROES } from '../../app/mock-data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // async getHeroes(): Promise<Hero[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(HEROES);
  //     }, 5000);
  //   });
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
