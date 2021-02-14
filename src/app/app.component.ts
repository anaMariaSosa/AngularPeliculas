import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'front-end';
  peliculas;
  

  ngOnInit(): void{
    setTimeout(() => {
      this.peliculas = [{
        titulo: 'spider man',
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
