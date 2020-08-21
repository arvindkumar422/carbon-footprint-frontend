import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Location} from '../models/location/location.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  source = new Subject<Location>();
  destination = new Subject<Location>();
  flightMode = new Subject<boolean>();

  statsMode = new Subject<string>();
  dailyStats = new Subject<any[]>();

  constructor() { }

  getSource(): Location {
    return new Location(42.310871, -71.125061);
  }
  getDestination(): Location {
    return new Location(42.360081, -71.058884);
  }
 
  emitFlightMode(mode: boolean) {
    this.flightMode.next(mode);
  }

  emitStatsMode(mode: string) {
    this.statsMode.next(mode);
  }

  emitDailyStats(todayMaxMethane: number[]) {
    this.dailyStats.next(todayMaxMethane);
  }


}   
