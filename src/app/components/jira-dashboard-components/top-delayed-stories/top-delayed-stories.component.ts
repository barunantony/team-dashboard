import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { paths } from 'src/utils/constants';

@Component({
  selector: 'app-top-delayed-stories',
  templateUrl: './top-delayed-stories.component.html',
  styleUrls: ['./top-delayed-stories.component.css']
})
export class TopDelayedStoriesComponent implements OnInit {

  activeLink: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeLink = this.router.url === `/${paths.delayedStories}`;
  }

  navigateBack () {
    this.router.navigate(['']);
  }

}
