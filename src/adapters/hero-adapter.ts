import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../app/interfaces/hero';
import { APIService } from '../services/api-service/API.service';
@Injectable({
    providedIn: 'root',
})
export class HeroAdapter {
    constructor(

        private api: APIService
    ) { }
    getHeroes(): Observable<Hero[]> {

        return from(this.api.ListHeroes()).pipe(map(x => {
            return x.items ? x.items.map(y => {
                return {
                    id: Number(y!.id),
                    name: y!.name,
                    category: y!.category ? y?.category : undefined

                };
            }) : []
        }));
    }

    createHero(hero: Hero): Observable<Hero> {

        return from(this.api.CreateHero({
            name: hero.name,
            category: hero.category,
        })).pipe(map(y =>
        ({
            id: Number(y!.id),
            name: y!.name,
            category: y!.category ? y?.category : undefined

        })
        ));
    }
}