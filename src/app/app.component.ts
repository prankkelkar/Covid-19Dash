import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countries;
  multi: any[];
  single: any[];
  filtersLoaded: Promise<boolean>;
  constructor(private apiService: ApiService) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      this.countries = data;
      this.setData();
      this.filtersLoaded = Promise.resolve(true)
    });
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }

  setData() {
    this.multi = [
      {
        "name": "Germany",
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
        "name": "USA",
        "series": [
          {
            "name": "1990",
            "value": 250000000
          },
          {
            "name": "2010",
            "value": 309000000
          },
          {
            "name": "2011",
            "value": 311000000
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "1990",
            "value": 58000000
          },
          {
            "name": "2010",
            "value": 50000020
          },
          {
            "name": "2011",
            "value": 58000000
          }
        ]
      },
      {
        "name": "UK",
        "series": [
          {
            "name": "1990",
            "value": 57000000
          },
          {
            "name": "2010",
            "value": 62000000
          }
        ]
      }
    ];

    this.single = [

      {
        "name": this.countries[1]['country'],
        "value": this.countries[1]['deaths']
      },
      {
        "name": this.countries[2]['country'],
        "value": this.countries[2]['deaths']
      },
      {
        "name": this.countries[3]['country'],
        "value": this.countries[3]['deaths']
      }
    ];
  }
  title = 'covid-dash-webapp';
  

  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

 


  

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  isDoughnut: boolean = false;

 

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}


