import { cineReadDTO } from './../cine';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  model:cineReadDTO = {nombre:"Cuchura"};

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // nos subcribimos al metodoporque esto e sun observable
    this.activeRoute.params.subscribe(params => {alert(params.id); });
  }
  
  saveMovies(event:cineDTO){
    console.log(event);
  }
}
