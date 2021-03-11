import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorDTO, actorReadDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  form!: FormGroup;

  @Input()
  model!: actorReadDTO;

  @Output()
  submitActor: EventEmitter<actorDTO> = new EventEmitter<actorDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // esto es para inicializar el form en crear
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required]}],
      fechaNacimiento: '',
      foto:'',
      biografia: ''
    });
    // esto es para el inut en la edicion
    if (this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  saveActor(): any {
    this.submitActor.emit(this.form.value);
  }

  selectBase64File(file){
    this.form.get('foto')?.setValue(file);
    console.log("que tall");
  }

  changeMarkDown(event:any){
    this.form.get('biografia')?.setValue(event.target.value.toString());
  }
}
