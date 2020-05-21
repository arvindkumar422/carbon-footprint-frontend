import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Location} from '../models/location/location.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  source = new Subject<Location>();
  destination = new Subject<Location>();

  constructor() { }

  getSource(): Location {
    return new Location(42.310871, -71.125061);
  }
  getDestination(): Location {
    return new Location(42.360081, -71.058884);
  }

}   
