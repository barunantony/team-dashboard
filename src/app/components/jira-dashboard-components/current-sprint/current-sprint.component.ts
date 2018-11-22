import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/services/jira-service/jira.service';
import { Router } from '@angular/router';

import { paths } from 'src/utils/constants';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.css']
})
export class CurrentSprintComponent implements OnInit {

  activeLink: boolean;
  jiraTickets: {ticketNumber: string, url: string}[];

  constructor(private jiraService: JiraService, private router: Router) { }

  ngOnInit() {
    this.jiraService.getFlaggedTicketsOfCurrentSprint().then((data) => {
      this.jiraTickets = data;
    });
    this.activeLink = this.router.url === `/${paths.activeSprint}`;
  }

  navigateBack () {
    this.router.navigate(['']);
  }

}
