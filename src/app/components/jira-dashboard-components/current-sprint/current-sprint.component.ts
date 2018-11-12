import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/services/jira-service/jira.service';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.css']
})
export class CurrentSprintComponent implements OnInit {

  jiraTickets: {ticketNumber: string, url: string}[];

  constructor(private jiraService: JiraService) { }

  ngOnInit() {
    this.jiraTickets = this.jiraService.getFlaggedTicketsOfCurrentSprint();
  }

}
