import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, Layer, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordinate } from './coordinate';

@Component({
  selector: 'app-map',
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  ngOnInit(): void {
    this.layers = this.initialCoordinates.map( coordinate => {
      return marker([coordinate.latitude, coordinate.longitude], this.markerOptions);
    })
  }

  @Input({required: true})
  initialCoordinates: Coordinate[] = [];

  @Output()
  selectedCoordinate = new EventEmitter<Coordinate>()

  markerOptions: MarkerOptions ={
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng( 13.697258710580735,  100.55988023139165)
  };

  layers: Marker<Layer>[] = [];

  clickHanlder(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    this.layers = [];
    this.layers.push(marker([latitude, longitude], this.markerOptions))
    this.selectedCoordinate.emit({latitude, longitude})
  }
}
