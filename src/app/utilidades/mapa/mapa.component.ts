import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker } from 'leaflet';
import { coordenadaDTO } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input()
  coordenadasIniciales: coordenadaDTO[] = [];

  @Output()
  selectedCoor: EventEmitter<coordenadaDTO> = new EventEmitter<coordenadaDTO>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 20,
    center: latLng(40.39551245721832, -3.6785656210622624)
  };

  capas: Marker<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => Marker[ valor.latitud, valor.longitud]);
  }

  manageMapClick(event: LeafletMouseEvent): void{
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    this.capas = [];
    this.capas.push(new Marker([latitud, longitud]));
    this.selectedCoor.emit({latitud: latitud, longitud: longitud});
    console.log({latitud, longitud});
  }
}
