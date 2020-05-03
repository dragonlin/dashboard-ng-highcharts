import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};
  
  @Input() data = [];

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Data '
      },
      subtitle: {
          text: 'Demo'
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting:{
        enabled: true
      },
      series: this.data
    };
    
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    
    HC_exporting(Highcharts);
  };
}
