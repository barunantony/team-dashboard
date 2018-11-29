import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CurrentSprintComponent } from "./components/jira-dashboard-components/current-sprint/current-sprint.component";
import { TopDelayedStoriesComponent } from "./components/jira-dashboard-components/top-delayed-stories/top-delayed-stories.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TrafficDashboardComponent } from "./components/traffic-dashboard/traffic-dashboard.component";
import { paths } from 'src/utils/constants';
import { AuthService } from "src/services/auth-service/auth.service";

const appRoutes: Routes = [
    { path: paths.root, component: DashboardComponent },
    { path: paths.activeSprint, component: CurrentSprintComponent, canActivate: [AuthService] },
    { path: paths.delayedStories, component: TopDelayedStoriesComponent, canActivate: [AuthService] },
    { path: paths.chart, component: TrafficDashboardComponent, canActivate: [AuthService] },
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