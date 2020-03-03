import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'User Invsetment'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
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
          name: 'Schemes',
          colorByPoint: true,
          data: [{
              name: 'MultiCap',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'Mirae Asset',
              y: 11.84
          }, {
              name: 'Axis Bluechip',
              y: 10.85
          }, {
              name: 'ICICI Pru Bluechip',
              y: 4.67
          }, {
              name: 'L&T Midcap',
              y: 4.18
          }, {
              name: 'HDFC Midcap',
              y: 1.64
          }, {
              name: 'Kotak',
              y: 1.6
          }, {
              name: 'HDFC',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
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
