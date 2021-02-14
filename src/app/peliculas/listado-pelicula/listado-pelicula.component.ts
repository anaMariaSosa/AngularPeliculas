import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  constructor() { }
  ;
  @Input()
  peliculas;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas
    }, 1000);
  }

  delete(peliIndex : number):void
  {
    this.peliculas.splice(peliIndex,1);
  }
}
