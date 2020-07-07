import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroeService } from '../heroe.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css'],
})
export class HeroeDetalleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location
  ) {}

  @Input() hero: Hero;
  ngOnInit(): void {}
}
