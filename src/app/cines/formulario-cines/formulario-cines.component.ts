import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CipherNameAndProtocol } from 'tls';
import { cineDTO } from '../cine';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit {

  form!: FormGroup;
  @Input()
  model!: cineDTO;

  @Output()
  saveCines: EventEmitter<cineDTO> = new EventEmitter<cineDTO>();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form  = this.formBuilder.group({
      nombre:['', {validators: [Validators.required]}]
    });
    // esto es para el inut en la edicion
    if (this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  saveMovie(){
    console.log("cines!!!");
    this.saveCines.emit(this.form.value);
  }

}
