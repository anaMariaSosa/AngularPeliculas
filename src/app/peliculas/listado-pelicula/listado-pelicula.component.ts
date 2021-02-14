import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  constructor() { }
  ;
  peliculas;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [{
        titulo: 'spider man - far from home',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },{
        titulo: 'moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99
      }]
    }, 1000);
  }

}
