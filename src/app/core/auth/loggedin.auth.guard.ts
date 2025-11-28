import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export const DEFAULT_ROUTE = 'account/info';

@Injectable({
    providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.appUser$.pipe(
            map(appUser => {
                if (appUser) {
                    this.router.navigateByUrl(DEFAULT_ROUTE);
                    return false;
                }
                return true;
            })
        );
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

}
