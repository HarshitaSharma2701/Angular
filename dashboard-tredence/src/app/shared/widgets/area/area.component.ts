import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Historical Performance of Various Stocks'
      },
      subtitle: {
          text: 'BSE MF'
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      credits: {
      enabled: false,
      },
      exporting: {
      enabled: true,
      },
      series: [{
          name: 'AXIS',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Baroda',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'BNP Paribas',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'BOI Axa ',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Canara Robeco',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
}
}