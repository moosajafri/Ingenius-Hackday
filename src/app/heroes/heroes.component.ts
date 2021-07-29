import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../../services/hero-service/hero.service';
import { MessageService } from 'src/services/message-service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  heroes: Hero[] = [];
  selectedHero?: Hero;
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes) => (this.heroes = heroes),
      complete: () => console.log('getHeroes complete'),
      error: (error) => console.log('getHeroes', error),
    });
  }
}
