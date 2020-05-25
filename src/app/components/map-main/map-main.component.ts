import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Location } from '../../models/location/location.model';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})
export class MapMainComponent implements OnInit {

  public lat: number;
  public lng: number;

  public origin: any;
  public destination: any;

  constructor(private dataService: DataService) {
    // this.origin = dataService.getS
    this.lat = this.dataService.getSource().latitude;
    this.lng = this.dataService.getSource().longitude;
  }

  ngOnInit() {
    this.getDirection();
    this.dataService.source.subscribe(
      (source: Location) => {
        this.origin = {lat: source.latitude, lng: source.longitude};
      }
    );
    this.dataService.destination.subscribe(
      (destination: Location) => {
        this.destination = {lat: destination.latitude, lng: destination.longitude};
      }
    );
  }

  getDirection() {
    this.origin = { lat: this.lat, lng: this.lng }
    this.destination = { lat: this.dataService.getDestination().latitude, lng: this.dataService.getDestination().longitude }
  }
}
