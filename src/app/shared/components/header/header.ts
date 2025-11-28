import {Component} from '@angular/core';
import {AuthService} from '../../../core/auth/auth.service';
import {Observable} from 'rxjs';
import {AppUser} from '../../../core/auth/types';

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.html',
    styleUrl: './header.sass'
})
export class Header {

    appUser$: Observable<AppUser>;
    appUser: AppUser | undefined;

    constructor(private authService: AuthService) {
        this.appUser$ = authService.appUser$;
        this.appUser = authService.appUser;
    }

    logout() {
        this.authService.logoutPostAction('/auth/login');
    }
}
