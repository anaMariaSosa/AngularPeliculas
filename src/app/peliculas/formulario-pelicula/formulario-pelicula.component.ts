import { peliculaDTO } from './../pelicula';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  form !: FormGroup;

  @Input()
  model !: peliculaDTO;

  @Output()
  onSaveMovie: EventEmitter<peliculaDTO> = new EventEmitter<peliculaDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: Validators.required}],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    });
    // esto es para el inut en la edicion
    if (this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  saveMovies(){
    this.onSaveMovie.emit(this.form.value);
  }

  selectPoster(event: File){
    this.form.get('poster')?.setValue(event);
  }

  setSummary(event: string){
    this.form.get('resumen')?.setValue(event);
  }

}
