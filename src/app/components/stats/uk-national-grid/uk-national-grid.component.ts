import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-uk-national-grid',
  templateUrl: './uk-national-grid.component.html',
  styleUrls: ['./uk-national-grid.component.css']
})
export class UkNationalGridComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getTodayEmissionData().subscribe(
      res => {
        this.todayData = res["data"];
        this.setDataForAreChart(this.todayData);
      }
    );

  }
  setDataForAreChart(todayData: []) {
    let temp = {
      "name": "actual",
      "series": []
    };
    let temp2 = {
      "name": "forecast",
      "series": []
    };
    todayData.forEach(
      element => {
        //if(element["intensity"]["actual"] == null || element["intensity"]["forecast"] == null) {return;}
        temp["series"].push(
          {
            "name": element["to"],
            "value": element["intensity"]["actual"] == null ? 0 : element["intensity"]["actual"]
          }
        );

        temp2["series"].push(
          {
            "name": element["to"],
            "value": element["intensity"]["forecast"] == null ? 0 : element["intensity"]["forecast"]
          }
        );
        //this.areaChartData.push(temp,temp2);

      }
    );
    this.areaChartData = [temp, temp2];
    console.log(temp, temp2);
    console.log(this.areaChartData);

  }

  title = 'Angular Charts';

  todayData: [];
  areaChartData: any[];

  view: any[] = [1000, 600];

  // options for the chart
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

  // data goes here
  public single = [
    {
      "name": "China",
      "value": 2243772
    },
    {
      "name": "USA",
      "value": 1126000
    },
    {
      "name": "Norway",
      "value": 296215
    },
    {
      "name": "Japan",
      "value": 257363
    },
    {
      "name": "Germany",
      "value": 196750
    },
    {
      "name": "France",
      "value": 204617
    }
  ];


  multi = [
    {
      "name": "actual",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },
    {
      "name": "forecast",
      "series": [
        {
          "name": "1990",
          "value": 34565
        },
        {
          "name": "2010",
          "value": 6754
        },
        {
          "name": "2011",
          "value": 3546
        }
      ]
    },
    {
      "name": "rtertrt",
      "series": [
        {
          "name": "1990",
          "value": 34565
        },
        {
          "name": "2010",
          "value": 6754
        },
        {
          "name": "2011",
          "value": 3546
        }
      ]
    }
  ];

}
