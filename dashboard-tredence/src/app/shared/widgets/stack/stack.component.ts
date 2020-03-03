import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
 
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Number of Top Sectors'
      },
      subtitle: {
          text: 'In BSE(By Market Cap)'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'By Category',
          data: [
              ['Defence', 8],
              ['Aqua', 3],
              ['Ancillaries', 1],
              ['Apples', 6],
              ['BPO/IT', 8],
              ['Commodity', 4],
              ['Education', 4],
              ['Finance', 1],
              ['Ports', 1]
          ]
      }]
  }

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}

