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
import { AppRoutingModule } from './app-routing.module';
import { XyChartComponent } from 'src/sharedComponents/xy-chart/xy-chart.component';
import { ButtonComponent } from 'src/sharedComponents/button/button.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ClickableCardsComponent,
    CurrentSprintComponent,
    DashboardComponent,
    SlideShowComponent,
    TopDelayedStoriesComponent,
    TrafficDashboardComponent,
    XyChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
