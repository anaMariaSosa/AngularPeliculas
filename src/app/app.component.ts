import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'front-end';
  peliculasEnCines;
  peliculasFuturo;
  

  ngOnInit(): void{
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'spider man',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },{
        titulo: 'moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99
      }]
    }, 1000);
    setTimeout(() => {
      this.peliculasFuturo = [{
        titulo: 'sirenita',
        fechaLanzamiento: new Date(),
        precio: 1500.99
      },{
        titulo: 'mickey',
        fechaLanzamiento: new Date('2019-11-16'),
        precio: 700.99
      }]
    }, 1000);
  }
  

}
