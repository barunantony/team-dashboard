import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentSprintComponent } from './components/jira-dashboard-components/current-sprint/current-sprint.component';
import { TopDelayedStoriesComponent } from './components/jira-dashboard-components/top-delayed-stories/top-delayed-stories.component';
import { TrafficDashboardComponent } from './components/traffic-dashboard/traffic-dashboard.component';
import { ClickableCardsComponent } from 'src/sharedComponents/clickable-cards/clickable-cards.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClickableCardsComponent,
    CurrentSprintComponent,
    TopDelayedStoriesComponent,
    TrafficDashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
