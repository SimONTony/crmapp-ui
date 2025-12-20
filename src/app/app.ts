import {Component, signal} from '@angular/core';
import {AuthService} from './core/auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    standalone: false,
    styleUrl: './app.sass'
})
export class App {
    protected readonly title = signal('crmapp-ui');

    protected isLoginPageActive = false;

    constructor(private authService: AuthService,
                private router: Router) {
        this.router.events.subscribe(
            {
                next: (event: any) => {
                    if (event instanceof NavigationEnd) {
                        this.isLoginPageActive = this.router.url.includes('login');
                    }
                }
            }
        );


    }
}
