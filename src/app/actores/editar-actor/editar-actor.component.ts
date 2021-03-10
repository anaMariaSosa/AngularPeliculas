import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO, actorReadDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  model: actorReadDTO = {nombre: 'Marta', fechaNacimiento: new Date(), foto: 'data:image/jpeg;base64,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'};

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
