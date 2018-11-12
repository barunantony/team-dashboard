import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDelayedStoriesComponent } from './top-delayed-stories.component';

describe('TopDelayedStoriesComponent', () => {
  let component: TopDelayedStoriesComponent;
  let fixture: ComponentFixture<TopDelayedStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDelayedStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDelayedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
