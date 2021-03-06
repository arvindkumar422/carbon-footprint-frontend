import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, from, of } from 'rxjs';
import { filter, catchError, tap, map, switchMap } from 'rxjs/operators';
import { Location } from 'src/app/models/location/location.model';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if(!this.geocoder) {
      return from(this.mapLoader.load())
      .pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<Location> {
    return this.waitForMapsToLoad().pipe(
      // filter(loaded => loaded),
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({'address': location}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log('Geocoding complete!');
              observer.next({
                latitude: results[0].geometry.location.lat(), 
                longitude: results[0].geometry.location.lng()
              });
            } else {
                console.log('Error - ', results, ' & Status - ', status);
                observer.next({ latitude: 0, longitude: 0 });
            }
            observer.complete();
          });
        })        
      })
    )
  }

}
