import { peliculaDTO } from './../pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveNewMovie(event: peliculaDTO){
    console.log(event);
  }
}
