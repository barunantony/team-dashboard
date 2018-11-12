import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideShowComponent } from 'src/sharedComponents/slide-show/slide-show.component';
import { ClickableCardsComponent } from 'src/sharedComponents/clickable-cards/clickable-cards.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurrentSprintComponent } from './components/jira-dashboard-components/current-sprint/current-sprint.component';
import { TopDelayedStoriesComponent } from './components/jira-dashboard-components/top-delayed-stories/top-delayed-stories.component';
import { TrafficDashboardComponent } from './components/traffic-dashboard/traffic-dashboard.component';

const appRoutes: Routes = [
  { path: 'active-sprint', component: CurrentSprintComponent },
  { path: 'delayed-stories', component: TopDelayedStoriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ClickableCardsComponent,
    CurrentSprintComponent,
    DashboardComponent,
    SlideShowComponent,
    TopDelayedStoriesComponent,
    TrafficDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
