import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetra';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {
  form!: FormGroup;  

  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',{validators:[Validators.required, Validators.minLength(2),primeraLetraMayuscula()]}]
    });
  }

  saveGender():void{
    //llamar a servicio de guardar
    this.router.navigate(['/generos']);
  }

  obtainNameError(){
    var field = this.form.get('nombre');
    if(field != null && field.hasError('required'))
    {
        return 'Mandatory field. Please complete before save';
    }
    if(field != null && field.hasError('minlength'))
    {
        return 'Min Length allowed is 2 chars. Please review it before save';
    }
    if(field != null && field.hasError('primeraLetraMayuscula'))
    {
        return field.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
