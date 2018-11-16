import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CurrentSprintComponent } from "./components/jira-dashboard-components/current-sprint/current-sprint.component";
import { TopDelayedStoriesComponent } from "./components/jira-dashboard-components/top-delayed-stories/top-delayed-stories.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TrafficDashboardComponent } from "./components/traffic-dashboard/traffic-dashboard.component";
import { paths } from 'src/utils/constants';

const appRoutes: Routes = [
    { path: paths.root, component: DashboardComponent },
    { path: paths.activeSprint, component: CurrentSprintComponent },
    { path: paths.delayedStories, component: TopDelayedStoriesComponent },
    { path: paths.chart, component: TrafficDashboardComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}