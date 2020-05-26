import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
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

  distance: string = "0 km";

  constructor(private dataService: DataService,
    private geocodeService: GeocodeService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private httpService: HttpService) {
    this.source = dataService.getSource();
    this.destination = dataService.getDestination();
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
      (result : Location) => {
        if(result.latitude === 0 && result.longitude === 0) {
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
      (result : Location) => {
        if(result.latitude === 0 && result.longitude === 0) {
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
    
    this.httpService.computeDistance(this.source, this.destination, this.modeString).subscribe(
      (res:any) => {
        this.distance = res.distance;
      }
    );
  }



}
