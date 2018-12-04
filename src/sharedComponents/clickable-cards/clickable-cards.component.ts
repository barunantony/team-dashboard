import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-cards',
  templateUrl: './clickable-cards.component.html',
  styleUrls: ['./clickable-cards.component.css']
})
export class ClickableCardsComponent implements OnInit {
  @Input() name: string = "empty name";
  @Input() url: string;
  @Input() summary: string;
  @Input() status: string;
  @Input() created: string;

  constructor() { }

  ngOnInit() {
  }

}
