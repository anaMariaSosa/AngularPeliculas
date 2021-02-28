import { generoDTO } from './../genero';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetra';

@Component({
  selector: 'app-form-generos',
  templateUrl: './form-generos.component.html',
  styleUrls: ['./form-generos.component.css'],
})
export class FormGenerosComponent implements OnInit {
  form!: FormGroup;

  @Input()
  model!: generoDTO;

  @Output()
  submitir: EventEmitter<generoDTO> = new EventEmitter<generoDTO>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(2),
            primeraLetraMayuscula(),
          ],
        },
      ],
    });
    if (this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  obtainNameError(): string {
    const field = this.form.get('nombre');
    if (field != null && field.hasError('required')) {
      return 'Mandatory field. Please complete before save';
    }
    if (field != null && field.hasError('minlength')) {
      return 'Min Length allowed is 2 chars. Please review it before save';
    }
    if (field != null && field.hasError('primeraLetraMayuscula')) {
      return field.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  saveGender(): any {
   this.submitir.emit(this.form.value);
  }
}
