import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("route", route);
        console.log("state", state);
        let flag = true;

        if (state.url === '/delayed-stories') {
            flag = false;
        }
        
        !flag && this.router.navigate(['/active-sprint']);

        console.log(flag);
        return flag;
    }
}