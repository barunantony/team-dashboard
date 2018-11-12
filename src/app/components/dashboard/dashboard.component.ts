import { Component, OnDestroy } from '@angular/core';

import { findSlidingComponent, rotateActiveFlag, checkActiveComponentReachedExpiry } from 'src/utils/helper/helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  
  component: { enter: boolean, leave: boolean, name: string, stay: number};
  components: { enter: boolean, leave: boolean, name: string, stay: number}[];
  intervalId: any;
  timerId: any;

  constructor () {
    this.components = [
      { enter: true, leave: false, name: 'c1', stay: 1 },
      { enter: false, leave: false, name: 'c2', stay: 2 },
      { enter: false, leave: false, name: 'c3', stay: 3 },
    ];
    this.component = this.components[0];
    let count = 1;

    this.intervalId = setInterval(() => {

      if (!checkActiveComponentReachedExpiry(this.components, count, 'enter')) {
        count++;
        return;
      }
      count = 1;

      rotateActiveFlag(this.components, 'leave');
      let indx = findSlidingComponent(this.components, 'leave');
      this.component = this.components[indx];

       this.timerId = setTimeout(() => {
        rotateActiveFlag(this.components, 'enter');
        let indx = findSlidingComponent(this.components, 'enter');
        this.component = this.components[indx];
      }, 1000);

    }, 3000);
  }


  ngOnDestroy () {
    clearInterval(this.intervalId);
    clearInterval(this.timerId);
  }

}
