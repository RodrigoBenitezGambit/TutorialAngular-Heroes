import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', skill: 'Clonacion' },
      { id: 12, name: 'Narco', skill: 'Especialista en armas' },
      { id: 13, name: 'Bombasto', skill: 'Disparar bombas' },
      { id: 14, name: 'Celeritas', skill: 'Controlar las plantas' },
      { id: 15, name: 'Magneta', skill: 'Manejar los metales' },
      { id: 16, name: 'RubberMan', skill: 'Hablar con animales' },
      { id: 17, name: 'Dynama', skill: 'Piel de diamante' },
      { id: 18, name: 'Dr IQ', skill: 'SuperInteligencia' },
      { id: 19, name: 'Magma', skill: 'Manipular el fuego' },
      { id: 20, name: 'Tornado', skill: 'Super Velocidad' },
    ];
    return { heroes };
  }

  // Invalida el método genId para garantizar que un héroe siempre tenga una identificación.
  // Si la matriz de héroes está vacía,
  // el siguiente método devuelve el número inicial (11).
  // si la matriz de héroes no está vacía, el siguiente método devuelve el más alto
  // id del héroe + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
