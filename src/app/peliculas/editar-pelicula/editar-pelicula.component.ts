import { peliculaReadDTO } from './../pelicula';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  model: peliculaReadDTO = {
    titulo: 'default title',
    resumen: 'default summary',
    enCines: false,
    fechaLanzamiento: new Date('12-05-2020'),
    trailer: 'bubu',
    poster: 'http://cdn2.estamosrodando.com/biografias/16/10/james-franco-148396.jpg'
  };

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // nos subcribimos al metodoporque esto e sun observable
    this.activeRoute.params.subscribe(params => {alert(params.id); });
  }

  saveMovieChanges(event: peliculaDTO){
    console.log(event);
  }

}
