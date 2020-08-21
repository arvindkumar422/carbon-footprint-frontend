import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stats-data',
  templateUrl: './stats-data.component.html',
  styleUrls: ['./stats-data.component.css']
})
export class StatsDataComponent implements OnInit {

  modeString: string = "Methane";
  dailyStats: any[] = [0,0,0];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.dailyStats.subscribe(
      (stats: any[]) => {
        this.dailyStats = stats;
      }
    );
  }

  onModeChange(event) {
    this.dataService.emitStatsMode(event.target.value);
    this.modeString = event.target.value === "methane" ? "Methane" : "Carbon-Monoxide";
  }

}
