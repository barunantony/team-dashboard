import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CurrentSprintComponent } from "./components/jira-dashboard-components/current-sprint/current-sprint.component";
import { TopDelayedStoriesComponent } from "./components/jira-dashboard-components/top-delayed-stories/top-delayed-stories.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'active-sprint', component: CurrentSprintComponent },
    { path: 'delayed-stories', component: TopDelayedStoriesComponent },
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