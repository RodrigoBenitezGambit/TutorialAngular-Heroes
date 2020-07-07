import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroeService } from '../heroe.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroeService: HeroeService) {}

  ngOnInit() {
    this;
  }

  getHeroes(): void {
    this.heroeService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
