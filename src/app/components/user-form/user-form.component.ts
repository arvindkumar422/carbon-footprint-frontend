import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Location} from '../models/location/location.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  source: Location;
  destination: Location;

  constructor(private dataService: DataService) {
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


}
