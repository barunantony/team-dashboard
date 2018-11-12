import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableCardsComponent } from './clickable-cards.component';

describe('ClickableCardsComponent', () => {
  let component: ClickableCardsComponent;
  let fixture: ComponentFixture<ClickableCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
