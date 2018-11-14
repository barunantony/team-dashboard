import { Component } from '@angular/core';
import { XYData } from 'src/sharedComponents/xy-chart/xy-data';

const prices: XYData[] = [
  { xAxis: {x: 0}, yAxis: [{ y: 0}, {y: 1}] },
  { xAxis: {x: 2}, yAxis: [{ y: 1}, {y: 11}] },
  { xAxis: {x: 1}, yAxis: [{ y: 2}, {y: 1}] },
  { xAxis: {x: 3}, yAxis: [{ y: 3}, {y: 21}] },
  { xAxis: {x: 4}, yAxis: [{ y: 4}, {y: 13}] },
  { xAxis: {x: 5}, yAxis: [{ y: 5}, {y: 17}] },
  { xAxis: {x: 6}, yAxis: [{ y: 6}, {y: 1}] },
  { xAxis: {x: 7}, yAxis: [{ y: 7}, {y: 14}] },
  { xAxis: {x: 8}, yAxis: [{ y: 8}, {y: 10}] },
  { xAxis: {x: 9}, yAxis: [{ y: 9}, {y: 11}] },
  { xAxis: {x: 10}, yAxis: [{ y: 11}, {y: 21}] },
  { xAxis: {x: 11}, yAxis: [{ y: 10}, {y: 12}] },
  { xAxis: {x: 12}, yAxis: [{ y: 10}, {y: 21}] },
  { xAxis: {x: 13}, yAxis: [{ y: 14}, {y: 14}] },
  { xAxis: {x: 14}, yAxis: [{ y: 15}, {y: 21}] },
  { xAxis: {x: 15}, yAxis: [{ y: 17}, {y: 13}] },
  { xAxis: {x: 16}, yAxis: [{ y: 18}, {y: 16}] },
  { xAxis: {x: 17}, yAxis: [{ y: 19}, {y: 17}] },
  { xAxis: {x: 18}, yAxis: [{ y: 20}, {y: 17}] },
  { xAxis: {x: 19}, yAxis: [{ y: 21}, {y: 18}] },
  { xAxis: {x: 20}, yAxis: [{ y: 22}, {y: 19}] },
  { xAxis: {x: 21}, yAxis: [{ y: 12}, {y: 12}] },
];

@Component({
  selector: 'app-traffic-dashboard',
  templateUrl: './traffic-dashboard.component.html',
  styleUrls: ['./traffic-dashboard.component.css']
})
export class TrafficDashboardComponent {

  xyStatus: XYData[];
  xyStatusToPlot: XYData[];

  set XYStatus(status: XYData[]) {
    this.xyStatus = status;
    this.xyStatusToPlot = [...status];// this.xyStatus.slice(0, this.xyStatus.length);
  }

  constructor() {
    this.XYStatus = prices;
    setInterval(() => {
      prices.forEach((price) => {
        let random: number = Math.ceil(Math.random() * 10);
        let y;
        if (random % 2 == 0) {
          y = price.yAxis[0];
        } else {
          y = price.yAxis[1];
        }
        y.y = y.y + y.y * random / 10;
      });
      this.XYStatus = prices;
    }, 2000);
  }

}
