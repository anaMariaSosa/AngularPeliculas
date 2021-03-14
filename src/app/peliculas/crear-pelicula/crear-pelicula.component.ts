import { peliculaDTO, peliculaReadDTO } from './../pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  model: peliculaReadDTO = {
    titulo: '',
    resumen: '',
    enCines: false,
    fechaLanzamiento: new Date(),
    trailer: '',
    poster: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveNewMovie(event: peliculaDTO): void{
    console.log(event);
  }
}
