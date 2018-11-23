import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class LoggerService {
    logMessage (msg: string) {
        // todo: connect to a remote service to log the message
        // console.log(msg);
    }
}