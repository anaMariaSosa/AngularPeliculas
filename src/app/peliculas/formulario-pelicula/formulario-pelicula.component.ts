import { peliculaDTO } from './../pelicula';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { multipleSelectorDTO } from 'src/app/utilidades/selector-multiple/multipleSelector';

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

  notSelectedGender: multipleSelectorDTO[] = [
          {key: 1, option: 'Drama'},
          {key: 2, option: 'Aventura'},
          {key: 3, option: 'Terror'}];

  selectedGender: multipleSelectorDTO[] = [];

  notSelectedMovie: multipleSelectorDTO[] = [
    {key: 1, option: 'Kinepolis'},
    {key: 2, option: 'Cinesa'},
    {key: 3, option: 'Yelmo'}];

selectedMovie: multipleSelectorDTO[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: Validators.required}],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });
    // esto es para el inut en la edicion
    if (this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  saveMovies(): void{
    const generosIds = this.selectedGender.map(val => val.key);
    this.form.get('generosId')?.setValue(generosIds);
    console.log(this.selectedGender);
    console.log(generosIds);
    const cineIds = this.selectedMovie.map(val => val.key);
    this.form.get('cinesId')?.setValue(cineIds);
    console.log(this.selectedMovie);
    console.log(cineIds);
    this.onSaveMovie.emit(this.form.value);
  }

  selectPoster(event: File): void{
    this.form.get('poster')?.setValue(event);
  }

  setSummary(event: string): void{
    this.form.get('resumen')?.setValue(event);
  }

}
