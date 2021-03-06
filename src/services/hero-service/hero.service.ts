import { Injectable } from '@angular/core';
import { Hero } from '../../app/interfaces/hero';
import { HEROES } from '../../app/mock-data/mock-heroes';
import { from, Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { APIService } from '../api-service/API.service';
import { HeroAdapter } from 'src/adapters/hero-adapter';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private heroAdapter: HeroAdapter
  ) { }
  private heroesUrl = 'api/heroes'; // URL to web api
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  // async getHeroes(): Promise<Hero[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(HEROES);
  //     }, 5000);
  //   });
  // }
  getHeroes(): Observable<Hero[]> {
    return this.heroAdapter.getHeroes();
    // return this.http.get<Hero[]>(this.heroesUrl).pipe(
    //   tap(() => this.log('fetched heroes')),
    //   catchError(this.handleError<Hero[]>('getHeroes', []))
    // );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {

    return this.heroAdapter.createHero(hero);

    // return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    //   tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    //   catchError(this.handleError<Hero>('addHero'))
    // );
  }
  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return this.getHeroes();
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
