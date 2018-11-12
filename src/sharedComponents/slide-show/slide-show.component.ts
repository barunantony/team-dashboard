import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  @Input() enter: boolean;
  @Input() leave: boolean;

  constructor() { }

  ngOnInit() {
  }

}
