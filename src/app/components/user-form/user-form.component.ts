import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Location } from '../../models/location/location.model';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GeocodeService } from '../services/geocode.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  source: Location;
  destination: Location;

  srcAddress: string;
  destAddress: string;
  modeString: string = 'walking';
  vehicleString: string;
  distance: string = "0 km";
  emissions: string = "0 g";
  vehicleList: Array<string> = undefined;
  drivingList: string[];
  transitList: string[];
  displayVehicleDropdown: boolean;

  constructor(private dataService: DataService,
    private geocodeService: GeocodeService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private httpService: HttpService) {
    this.source = dataService.getSource();
    this.destination = dataService.getDestination();
    this.drivingList = ["car (diesel)", "car (petrol)", "car (electric)", "motorcycle", "lorry"];
    this.transitList = ["bus", "train"];
  }

  ngOnInit() {
  }

  onSourceChange() {
    this.dataService.source.next(this.source);
  }

  onDestinationChange() {
    this.dataService.destination.next(this.destination);
  }

  searchSrcAddress() {
    this.geocodeService.geocodeAddress(this.srcAddress).subscribe(
      (result: Location) => {
        if (result.latitude === 0 && result.longitude === 0) {
          alert("Address not found");
        }
        else {
          this.source.latitude = result.latitude;
          this.source.longitude = result.longitude;
          this.onSourceChange();
        }
      }
    );
  }

  searchDestAddress() {
    this.geocodeService.geocodeAddress(this.destAddress).subscribe(
      (result: Location) => {
        if (result.latitude === 0 && result.longitude === 0) {
          alert("Address not found");
        }
        else {
          this.destination.latitude = result.latitude;
          this.destination.longitude = result.longitude;
          this.onDestinationChange();
        }
      }
    );
  }

  computeCF() {

    this.httpService.computeDistance(this.source, this.destination, this.modeString, this.vehicleString).subscribe(
      (res: any) => {
        this.distance = res.distance;
        this.emissions = res.emissions;
      }
    );
  }

  getVehicles() {
    //   switch(this.modeString){
    //     case 'driving':  this.vehicleList =  ;
    //     break;
    //     case 'transit':  this.vehicleList = ;
    //     break;
    //     default: this.vehicleList = undefined;
    //     break;
    // }
  }

  modeChange() {
    if(this.modeString === 'driving') {
      this.vehicleString = 'car (petrol)';
    }
    else if(this.modeString === 'transit') {
      this.vehicleString = 'bus';
    }
  }

  onModeChange(event) {
    this.modeString = event.target.value;
    if(this.modeString === 'driving') {
      this.vehicleString = 'car (petrol)';
    }
    else if(this.modeString === 'transit') {
      this.vehicleString = 'bus';
    }
  }

}