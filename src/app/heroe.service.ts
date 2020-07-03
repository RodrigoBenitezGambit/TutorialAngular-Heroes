import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './lista-heroes';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    //Manda un mensaje despues de buscar los heroes
    this.messageService.add('HeroeService : heroes buscados');
    return of(HEROES);
  }
}
