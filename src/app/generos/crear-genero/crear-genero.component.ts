import { generoDTO } from './../genero';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetra';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent { 

  constructor(private router:Router) { }


  saveGender(gender: generoDTO):void{
    //llamar a servicio de guardar
    console.log(gender);
    this.router.navigate(['/generos']);
  }

}
