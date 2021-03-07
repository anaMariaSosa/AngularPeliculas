import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { actorDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent{

  constructor(private router: Router) { }

  saveActor(actor: actorDTO | any): void{
    // llamar a servicio de guardar
    console.log(actor);
    this.router.navigate(['/actores']);
  }

}
