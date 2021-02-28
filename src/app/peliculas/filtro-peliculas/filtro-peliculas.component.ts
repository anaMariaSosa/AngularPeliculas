import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  form!: FormGroup;
  generos = [{id: 1, nombre: 'Drama'},
             {id: 2, nombre: 'Comedia'},
             {id: 3, nombre: 'Pastelitos'}];

  peliculas = [
    {titulo: 'spider-man', generoId: [1, 2], proxEstrenos: true, enCines: false, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8mTJap09v36YxShQHD8tU6ADMrS6AGF3Sw&usqp=CAU'},
    {titulo: 'moana', generoId: [3], proxEstrenos: false, enCines: true, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBuQazODLBo_kTM-zTpdVIKLVAT3_VnkwqaXbiDqy9vY5cdVv6agf6A66wQ&usqp=CAc'},
    {titulo: 'sirenita', generoId: [2], proxEstrenos: false, enCines: true, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dqvDFu2iwUS8G9aDPzS6gyJTM_7ftYzGHA&usqp=CAU'}
  ];

  peliculasOriginal = this.peliculas;

  defaultValuesPelis = {
    titulo: '',
    generoId: 0,
    proxEstrenos: false,
    enCines: false
  };

  constructor(private formBuilder: FormBuilder,
              private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.defaultValuesPelis);
    this.readURLValues();
    this.searchPelis(this.form.value);

    this.form.valueChanges
    .subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.searchPelis(valores);
      this.searchAnaIncludeinURL();
      console.log(valores);
    });
  }

  searchPelis(valores: any): any{
    if (valores.titulo) {
        this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generoId.indexOf(valores.generoId) !== -1);
    }
    if (valores.proxEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proxEstrenos);
    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  clean(): void {
    // con esta opcion no recarga la lista de pelis inicial pero con patch si
    // this.form = this.formBuilder.group(this.defaultValuesPelis);
    this.form.patchValue(this.defaultValuesPelis);
  }

  private searchAnaIncludeinURL(): void{
    const queryStrings: string[] = [];
    const formValues = this.form.value;

    if (formValues.titulo){
      queryStrings.push(`titulo=${formValues.titulo}`);
    }
    if (formValues.generoId !== 0){
      queryStrings.push(`generoId=${formValues.generoId}`);
    }
    if (formValues.proxEstrenos){
      queryStrings.push(`proxEstrenos=${formValues.proxEstrenos}`);
    }
    if (formValues.enCines){
      queryStrings.push(`enCines=${formValues.enCines}`);
    }
    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  private readURLValues(): void{
    this.activatedRoute.queryParams.subscribe((params) => {
      const urlObjects: any = {};
      if (params.titulo)
      {
        urlObjects.titulo = params.titulo;
      }
      if (params.generoId)
      {
        urlObjects.generoId = Number(params.generoId);
      }
      if (params.proxEstrenos)
      {
        urlObjects.proxEstrenos = params.proxEstrenos;
      }
      if (params.enCines)
      {
        urlObjects.enCines = params.enCines;
      }

      this.form.patchValue(urlObjects);
    });
  }
}
