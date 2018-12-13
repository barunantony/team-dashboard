import { Component } from '@angular/core';
import { JiraService } from 'src/services/jira-service/jira.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-dashboard';
  projectID;

  constructor(private jiraServices: JiraService) {
    this.projectID = jiraServices.getProjectID();
  }

  onChangeProjectID(event: any) {
    console.log(event.target.value);
    this.jiraServices.setProjectID(event.target.value);
  }
}
