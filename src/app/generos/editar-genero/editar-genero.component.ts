import { generoDTO } from './../genero';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {

  constructor(private router:Router) { }

  model:generoDTO = {nombre:'Drama'};

  saveGender(gender: generoDTO):void{
    //llamar a servicio de guardar
    console.log(gender);
    this.router.navigate(['/generos']);
  }

}
