import { cineDTO } from './../cine';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveMovies(event: cineDTO){
    console.log(event);
  }

}
