import { Injectable } from "@angular/core";
import { XYData } from "src/sharedComponents/xy-chart/xy-data";
import { LoggerService } from "../logger-service/logger.service";

@Injectable({
    providedIn: 'root',
})
export class JiraService {

     /** Example: [{ticketNumber: 'RP-101', url: 'http://jira.com/RP-101'}] */
    private flaggedTickets: {ticketNumber: string, url: string}[];
    private flaggedTicketsLoading: Promise<void>;

    private topTenDelayedStories: {ticketNumber: string, url: string}[];
    private topTenDelayedStoriesLoading: Promise<void>;
   
    /**
     * Example:
     * [{ xAxis: {x: 0}, yAxis: [{ y: 0}, {y: 1}] },
     *  { xAxis: {x: 2}, yAxis: [{ y: 1}, {y: 11}] },];
     * */
    private burndownData: { xAxis: {x: number}, yAxis: { y: number}[]}[];
    private burndownDataLoading: Promise<void>;

    constructor(private loggerService: LoggerService) {
        /** fetch flagged tickets */
        this.flaggedTicketsLoading = 
            fetch(
                'https://tcensr8hxe.execute-api.us-east-2.amazonaws.com/dev/api-team-dashboard/tickets',
                {
                    method: 'POST',
                    body: JSON.stringify({key: 'flaggedTickets'})
                }
            ).then((res) => res.json())
                .then((jsonRes) =>  {
                    this.flaggedTickets = jsonRes && jsonRes.body;
                }).catch((err) => {
                    this.loggerService.logMessage(err);
                  });

        /** fetch long pending stories created but not taken to active spring */
        this.topTenDelayedStoriesLoading = 
        fetch(
            'https://tcensr8hxe.execute-api.us-east-2.amazonaws.com/dev/api-team-dashboard/tickets',
            {
                method: 'POST',
                body: JSON.stringify({key: 'longOpenStories'})
            }
        ).then((res) => res.json())
            .then((jsonRes) =>  {
                this.topTenDelayedStories = jsonRes && jsonRes.body;
            }).catch((err) => {
                this.loggerService.logMessage(err);
              });

        /** fetch burndown data */
        this.burndownDataLoading = 
            fetch(
                'https://tcensr8hxe.execute-api.us-east-2.amazonaws.com/dev/api-team-dashboard/tickets',
                {
                    method: 'POST',
                    body: JSON.stringify({key: 'burndown'})
                }
            ).then((res) => res.json())
                .then((jsonRes) =>  {
                    this.burndownData = jsonRes && jsonRes.body;
                }).catch((err) => {
                    this.loggerService.logMessage(err);
                  });
    }

    /**
     * Jira tickets from the active sprint which are flagged.
     */
    getFlaggedTicketsOfCurrentSprint (): Promise<any> {
        return new Promise ((res, rej) => {
           this.flaggedTicketsLoading.then(() => {
                res(this.flaggedTickets);
            });
        });
    }

    /**
     * Stories from backlog, sorted from the time it was initially created/updated ? 
     */
    getTopTenDelayedStories (): Promise<any> {
        return new Promise ((res, rej) => {
            this.topTenDelayedStoriesLoading.then(() => {
                 res(this.topTenDelayedStories);
             });
         });
    }

    getBurnDownChartForXYChart () {
        return new Promise ((res, rej) => {
            this.burndownDataLoading.then(() => {
                 res(this.burndownData);
             });
         });
    }
}