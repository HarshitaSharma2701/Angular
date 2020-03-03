import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    var colors = Highcharts.getOptions().colors;
    this.chartOptions = {
      chart: {
          type: 'spline'
      },
  
      legend: {
          symbolWidth: 40
      },
  
      title: {
          text: 'Market Capitalization'
      },
  
      subtitle: {
          text: 'Ranked by current Market Cap(U.S.$ Millions)'
      },
  
      yAxis: {
          title: {
              text: 'Percentage usage'
          }
      },
  
      xAxis: {
          title: {
              text: 'Time'
          },
          accessibility: {
              description: 'Time from December 2010 to September 2019'
          },
          categories: ['December 2010', 'May 2012', 'January 2014', 'July 2015', 'October 2017', 'September 2019']
      },
  
      tooltip: {
          valueSuffix: '%'
      },
  
      plotOptions: {
          series: {
              point: {
                  events: {
                      click: function () {
                          window.location.href = this.series.options.website;
                      }
                  }
              },
              cursor: 'pointer'
          }
      },
  
      series: [
          {
              name: 'Saudi Arb Oil',
              data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
              website: 'https://www.nvaccess.org',
              color: colors[2],
              accessibility: {
                  description: 'This is the most used screen reader in 2019'
              }
          }, {
              name: 'Microsoft',
              data: [69.6, 63.7, 63.9, 43.7, 66.0, 61.7],
              website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
              dashStyle: 'ShortDashDot',
              color: colors[0]
          }, {
              name: 'Apple',
              data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
              website: 'http://www.apple.com/accessibility/osx/voiceover',
              dashStyle: 'ShortDot',
              color: colors[1]
          }, {
              name: 'Amazon',
              data: [null, null, null, null, 21.4, 30.3],
              website: 'https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator',
              dashStyle: 'Dash',
              color: colors[9]
          }, {
              name: 'Alphabet',
              data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
              website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
              dashStyle: 'ShortDot',
              color: colors[5]
          }, {
              name: 'Facebook',
              data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
              website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
              dashStyle: 'ShortDash',
              color: colors[3]
          }
      ],
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 550
              },
              chartOptions: {
                  legend: {
                      itemWidth: 150
                  },
                  xAxis: {
                      categories: ['Dec. 2010', 'May 2012', 'Jan. 2014', 'July 2015', 'Oct. 2017', 'Sep. 2019']
                  },
                  yAxis: {
                      title: {
                          enabled: false
                      },
                      labels: {
                          format: '{value}%'
                      }
                  }
              }
          }]
      }
  }


    
  }

}
