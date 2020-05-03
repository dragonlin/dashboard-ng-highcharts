import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.less'],
})
export class PieComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};

  @Input() data = [];

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in January, 2018',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: this.data
    };

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
