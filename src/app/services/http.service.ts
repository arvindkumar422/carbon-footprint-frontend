import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  computeEmissions(origins: Location, destinations: Location, mode: string, vehicle: string, seatType: string) {
    let originString: string = origins.latitude.toString() + "," + origins.longitude.toString();
    let destString: string = destinations.latitude.toString() + "," + destinations.longitude.toString();
    console.log("Src: ", originString);
    console.log("Dest: ", destString);
    return this.httpClient.post('http://localhost:3000/getDistance',
      { "origins": [originString], "destinations": [destString], "mode": mode, "vehicle": vehicle,"seatType":seatType });
  }

  getTweets() {
    return this.httpClient.get('http://localhost:3000/getTweets');
  }

  getNews() {
    return this.httpClient.get('http://localhost:3000/getNews');
  }

  getTodayEmissionData() {
    return this.httpClient.get('https://api.carbonintensity.org.uk/intensity/date');
  }

  getEmissionDataCM() {
    return this.httpClient.get('https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=USA&interval=day&begin=2019-04-10&end=2020-08-11&limit=100&offset=0');
  }

  getEmissionDataMethane() {
    return this.httpClient.get('https://api.v2.emissions-api.org/api/v2/methane/statistics.json?country=USA&interval=day&begin=2019-04-10&end=2020-08-11&limit=100&offset=0');
  }

  getNearestAirports(source: Location) {
    return this.httpClient.get('http://localhost:3000/getAirportList');
  }

}
