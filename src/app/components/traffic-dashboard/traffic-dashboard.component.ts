import { Component } from '@angular/core';
import { XYData } from 'src/sharedComponents/xy-chart/xy-data';
import { JiraService } from 'src/services/jira-service/jira.service';

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

  constructor(private jiraServices: JiraService) {
    this.XYStatus = jiraServices.getBurnDownChartForXYChart();
  }

}
