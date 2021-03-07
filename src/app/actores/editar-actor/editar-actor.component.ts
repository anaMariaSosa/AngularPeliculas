import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  model: actorDTO = {nombre: 'Marta', fechaNacimiento: new Date()};

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // nos subcribimos al metodoporque esto e sun observable
    this.activeRoute.params.subscribe(params => {alert(params.id); });
  }

  saveActor(actor: actorDTO | any): void{
    // llamar a servicio de guardar
    console.log(actor);
  }

}
