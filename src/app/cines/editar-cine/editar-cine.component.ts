import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // nos subcribimos al metodoporque esto e sun observable
    this.activeRoute.params.subscribe(params => {alert(params.id); });
  }
}
