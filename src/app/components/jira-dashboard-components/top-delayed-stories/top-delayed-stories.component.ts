import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { paths } from 'src/utils/constants';
import { JiraService } from 'src/services/jira-service/jira.service';

@Component({
  selector: 'app-top-delayed-stories',
  templateUrl: './top-delayed-stories.component.html',
  styleUrls: ['./top-delayed-stories.component.css']
})
export class TopDelayedStoriesComponent implements OnInit {

  activeLink: boolean;
  jiraTickets: {ticketNumber: string, url: string }[];

  constructor(private jiraService: JiraService, private router: Router) {}

  ngOnInit() {
    this.jiraService.getTopTenDelayedStories().then((data = []) => {
      this.jiraTickets = data;
    });
    this.activeLink = this.router.url === `/${paths.delayedStories}`;
  }

  navigateBack () {
    this.router.navigate(['']);
  }

}
