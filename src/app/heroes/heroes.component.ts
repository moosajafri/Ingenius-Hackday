import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  heroes: Hero[] = [];
  selectedHero?: Hero;
  async ngOnInit() {
    const abc = this.getHeroes();
    console.log("after getHeroes");
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  async getHeroes() {
    this.heroes = await this.heroService.getHeroes();
  }
}
