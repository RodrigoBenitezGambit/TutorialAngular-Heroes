import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css'],
})
export class HeroeDetalleComponent implements OnInit {
  constructor() {}

  @Input() hero: Hero;
  ngOnInit(): void {}
}
