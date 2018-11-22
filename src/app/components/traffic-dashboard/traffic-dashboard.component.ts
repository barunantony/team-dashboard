import { Component } from '@angular/core';
import { XYData } from 'src/sharedComponents/xy-chart/xy-data';
import { JiraService } from 'src/services/jira-service/jira.service';
import { Router } from '@angular/router';

import { paths } from 'src/utils/constants';

@Component({
  selector: 'app-traffic-dashboard',
  templateUrl: './traffic-dashboard.component.html',
  styleUrls: ['./traffic-dashboard.component.css']
})
export class TrafficDashboardComponent {

  activeLink: boolean;
  xyStatus: XYData[];
  xyStatusToPlot: XYData[];

  set XYStatus(status: XYData[]) {
    this.xyStatus = status;
    this.xyStatusToPlot = [...status];// this.xyStatus.slice(0, this.xyStatus.length);
  }

  constructor(private jiraServices: JiraService, private router: Router) {
    jiraServices.getBurnDownChartForXYChart().then((data) => {
      this.XYStatus = (<XYData[]>data);
    });
  }

  ngOnInit() {
    this.activeLink = this.router.url === `/${paths.chart}`;
  }

  navigateBack () {
    this.router.navigate(['']);
  }

}
