import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDashboardComponent } from './traffic-dashboard.component';

describe('TrafficDashboardComponent', () => {
  let component: TrafficDashboardComponent;
  let fixture: ComponentFixture<TrafficDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
