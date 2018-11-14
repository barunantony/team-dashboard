import { Injectable } from "@angular/core";
import { XYData } from "src/sharedComponents/xy-chart/xy-data";

@Injectable({
    providedIn: 'root',
})
export class JiraService {

    private flaggedTickets: {ticketNumber: string, url: string}[] = [
        {ticketNumber: 'RP-101', url: 'http://jira.com/RP-101'},
        {ticketNumber: 'RP-102', url: 'http://jira.com/RP-102'},
        {ticketNumber: 'RP-103', url: 'http://jira.com/RP-103'},
        {ticketNumber: 'RP-104', url: 'http://jira.com/RP-104'},
        {ticketNumber: 'RP-105', url: 'http://jira.com/RP-105'},
    ];
    private topTenDelayedStories: {ticketNumber: string, url: string}[] = [];

    /**
     * Jira tickets from the active sprint which are flagged.
     */
    getFlaggedTicketsOfCurrentSprint () {
        return this.flaggedTickets;
    }

    /**
     * Stories from backlog, sorted from the time it was initially created/updated ? 
     */
    getTopTenDelayedStories () {
        return this.topTenDelayedStories;
    }

    getBurnDownChartForXYChart () {
        const dummyBurndownData: XYData[] = [
            { xAxis: {x: 0}, yAxis: [{ y: 0}, {y: 1}] },
            { xAxis: {x: 2}, yAxis: [{ y: 1}, {y: 11}] },
            { xAxis: {x: 1}, yAxis: [{ y: 2}, {y: 1}] },
            { xAxis: {x: 3}, yAxis: [{ y: 3}, {y: 21}] },
            { xAxis: {x: 4}, yAxis: [{ y: 4}, {y: 13}] },
            { xAxis: {x: 5}, yAxis: [{ y: 5}, {y: 17}] },
            { xAxis: {x: 6}, yAxis: [{ y: 6}, {y: 1}] },
            { xAxis: {x: 7}, yAxis: [{ y: 7}, {y: 14}] },
            { xAxis: {x: 8}, yAxis: [{ y: 8}, {y: 10}] },
            { xAxis: {x: 9}, yAxis: [{ y: 9}, {y: 11}] },
            { xAxis: {x: 10}, yAxis: [{ y: 11}, {y: 21}] },
            { xAxis: {x: 11}, yAxis: [{ y: 10}, {y: 12}] },
            { xAxis: {x: 12}, yAxis: [{ y: 10}, {y: 21}] },
            { xAxis: {x: 13}, yAxis: [{ y: 14}, {y: 14}] },
            { xAxis: {x: 14}, yAxis: [{ y: 15}, {y: 21}] },
            { xAxis: {x: 15}, yAxis: [{ y: 17}, {y: 13}] },
            { xAxis: {x: 16}, yAxis: [{ y: 18}, {y: 16}] },
            { xAxis: {x: 17}, yAxis: [{ y: 19}, {y: 17}] },
            { xAxis: {x: 18}, yAxis: [{ y: 20}, {y: 17}] },
            { xAxis: {x: 19}, yAxis: [{ y: 21}, {y: 18}] },
            { xAxis: {x: 20}, yAxis: [{ y: 22}, {y: 19}] },
            { xAxis: {x: 21}, yAxis: [{ y: 12}, {y: 12}] },
          ];
        return dummyBurndownData;
    }
}