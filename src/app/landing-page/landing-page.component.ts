import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  title = 'front-end';
  peliculasEnCines;
  peliculasFuturo;

  ngOnInit(): void{
      this.peliculasEnCines = [{
        titulo: 'spider man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8mTJap09v36YxShQHD8tU6ADMrS6AGF3Sw&usqp=CAU'
      }, {
        titulo: 'moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBuQazODLBo_kTM-zTpdVIKLVAT3_VnkwqaXbiDqy9vY5cdVv6agf6A66wQ&usqp=CAc'
      },
     {
        titulo: 'la sirenita',
        fechaLanzamiento: new Date('1989-11-14'),
        precio: 500.99,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dqvDFu2iwUS8G9aDPzS6gyJTM_7ftYzGHA&usqp=CAU'
      }];
      this.peliculasFuturo = [];
  }

}
