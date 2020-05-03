import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-widget-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.less"],
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  @Input() data = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "area",
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      tooltip: {
        split: true,
        valueSuffix: null,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        title: {
          text: null,
        },
        labels: {
          enabled: false,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        title: {
          text: null,
        },
        labels: {
          enabled: false,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      series: [
        {
          data: this.data,
        },
      ],
    };
    
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
