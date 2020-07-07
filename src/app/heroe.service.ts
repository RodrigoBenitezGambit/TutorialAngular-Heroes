import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './lista-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    //Manda un mensaje despues de buscar los heroes
    this.messageService.add(`HeroeService : heroes buscados`  );
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
