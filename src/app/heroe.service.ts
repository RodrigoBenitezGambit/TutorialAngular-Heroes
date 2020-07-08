import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './lista-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private heroesUrl = 'api/heroes'; //URL a la web API

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  //Registre un mensaje de HeroService con MessageService
  private log(message: string) {
    this.messageService.add(`HeroeService: ${message}`);
  }
  /** Obetener Heroes del servidor */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  //  OBTENER héroe por id. Will 404 si no se encuentra la identificación
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id= ${id}`)),
      catchError(this.handleError<Hero>(`getHero id= ${id}`))
    );
  }

  //  Manejar la operación Http que falló.
  //  Deje que la aplicación continúe.
  //  @param operation: nombre de la operación que falló
  //  @param result: valor opcional para devolver como resultado observable
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: envía el error a la infraestructura de registro remoto

      console.error(error); //Inicia sesion en la consola

      // TODO: mejor trabajo de error de transformación para consumo del usuario
      this.log(`${operation} falied: ${error.message}`);

      // Deje que la aplicación siga ejecutándose devolviendo un resultado vacío.
      return of(result as T);
    };
  }

  // PUT: actualiza el héroe en el servidor
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id= ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  }
