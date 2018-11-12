import { Injectable } from "@angular/core";

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
}