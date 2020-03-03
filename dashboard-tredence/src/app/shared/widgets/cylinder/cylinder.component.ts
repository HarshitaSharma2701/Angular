import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})
export class CylinderComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 15,
              beta: 15,
              viewDistance: 25,
              depth: 40
          }
      },
  
      title: {
          text: 'Top Companies in India(BSE)'
      },
  
      xAxis: {
          categories: ['Reliance', 'TCS', 'HDFC Bank', 'HUL', 'HDFC'],
          labels: {
              skew3d: true,
              style: {
                  fontSize: '16px'
              }
          }
      },
  
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Number of Sectors',
              skew3d: true
          }
      },
  
      tooltip: {
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
      },
  
      plotOptions: {
          column: {
              stacking: 'normal',
              depth: 40
          }
      },
  
      series: [{
          name: 'Coal',
          data: [5, 3, 4, 7, 2],
          stack: 'high'
      }, {
          name: 'Consumer Food',
          data: [3, 4, 4, 2, 5],
          stack: 'low'
      }, {
          name: 'Defence',
          data: [2, 5, 6, 2, 1],
          stack: 'high'
      }, {
          name: 'Electronics',
          data: [3, 0, 4, 4, 3],
          stack: 'low'
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
