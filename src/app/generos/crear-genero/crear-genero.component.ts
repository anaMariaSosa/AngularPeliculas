import { generoDTO } from './../genero';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router: Router) { }


  saveGender(gender: generoDTO | any): void{
    // llamar a servicio de guardar
    console.log(gender);
    this.router.navigate(['/generos']);
  }

}
