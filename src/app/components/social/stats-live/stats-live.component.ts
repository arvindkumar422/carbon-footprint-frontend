import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stats-live',
  templateUrl: './stats-live.component.html',
  styleUrls: ['./stats-live.component.css']
})
export class StatsLiveComponent implements OnInit {

  todayMaxCM: any[];
  todayMaxMethane: any[];
  liveDataMethane: [];
  liveDataCM: [];
  areaChartData: any[] = [];
  mode: string = "methane";

  view: any[] = [100, 300];

  // options for the char
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  //pie
  showLabels = true;

  constructor(private httpService: HttpService, private dataService: DataService) { }

  ngOnInit() {
    this.httpService.getEmissionDataCM().subscribe(
      (res: []) => {
        this.liveDataCM = res;
        const temp = this.liveDataCM[this.liveDataCM.length - 1]["value"];
        this.todayMaxCM = [temp["min"], temp["max"], temp["average"]];
        //this.setDataForAreChart("carbon-monoxide", this.liveDataCM);
      }
    );
    this.httpService.getEmissionDataMethane().subscribe(
      (res: []) => {
        this.liveDataMethane = res;
        const temp = this.liveDataMethane[this.liveDataMethane.length - 1]["value"];
        this.todayMaxMethane = [temp["min"], temp["max"], temp["average"]];
        this.setDataForAreChart("methane", this.liveDataMethane);
        this.dataService.emitDailyStats(this.todayMaxMethane);
      }
    );
    this.dataService.statsMode.subscribe(
      mode => {
        if(this.mode !== mode) {
          this.mode = mode;
          if(this.mode === 'methane') {
            this.setDataForAreChart("methane", this.liveDataMethane);
            this.dataService.emitDailyStats(this.todayMaxMethane);
          }
          else {
            this.setDataForAreChart("carbon-monoxide", this.liveDataCM);
            this.dataService.emitDailyStats(this.todayMaxCM);
          }
        }
      }
    );

  }

  onChangeMode() {

  }

  setDataForAreChart(name, series) {
    console.log(this.liveDataCM);
    let temp = {
      "name": name,
      "series": []
    };
    series.forEach(
      element => {
        const t = new Date(element["time"]["interval_start"]);
        temp["series"].push(
          {
            "name": t.getFullYear() + '-' + t.getMonth() + 1 + '-' + t.getDate(),
            "value": element["value"]["max"] == null ? 0 : element["value"]["max"]
          }
        );
      }
    );
    this.areaChartData = [temp];

  }

}
