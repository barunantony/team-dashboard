import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonStyle: string;
  @Input() buttonType: string;
  @Input() buttonName: string;
  @Input() onClick: Function;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick () {
    this.onClick();
  }

}
