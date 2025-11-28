import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError,  tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AppUser, LoginRequest, RegisterRequest} from './types';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/services/storage-service';
import {HttpService} from '../http.service';
import {AppHttpResponse} from '../types';

export const AUTH_TOKEN = 'authToken';
export const APP_USER_STORAGE_KEY = 'appUser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private appUserSubject$: BehaviorSubject<AppUser> = new BehaviorSubject(<AppUser>{});

    appUser$ = this.appUserSubject$.asObservable();

    get appUser(): AppUser {
        return this.appUserSubject$.value;
    }

    updateAppUser(value: any): Observable<AppUser> {
        this.appUserSubject$.next(value);
        return this.appUser$;
    }

    constructor(
        private http: HttpService,
        private storage: StorageService,
        private router: Router
    ) {
        const localUser = this.storage.getValueInLocalStorageByItem(APP_USER_STORAGE_KEY);
        if (localUser) {
            this.appUserSubject$.next(JSON.parse(localUser));
        }
    }

    async fetchCurrentUser() {
        return await this.http.get({
            url: `${environment.api.path}/user/current`,
        }).toPromise();
    }

    register(request: RegisterRequest): Observable<AppUser> {
        return this.http.post({
            url: `${environment.api.path}/auth/signup`,
            body: {
                ...request
            }
        }).pipe(
            tap({
                next: (response) => {
                    return response;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }

    login({email, password}: LoginRequest): Observable<AppUser> {
        return this.http.post({
            url: `${environment.api.path}/user/login`,
            body: {
                email,
                password,
            }
        }).pipe(
            tap({
                next: (response) => {
                    this.loginPostAction(response);
                    return response;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }

    private loginPostAction(response: any): void {
        this.appUserSubject$.next(response?.currentUser);
        this.storage.setValueToLocalStorageByItem(APP_USER_STORAGE_KEY, JSON.stringify(response?.currentUser));
        this.storage.setValueToLocalStorageByItem(AUTH_TOKEN, response?.token);
    }

    logout(redirectLink?: string): Observable<any> {
        return this.http.post({
            url: `${environment.api.path}/auth/logout`,
            body: {},
        }).pipe(
            tap({
                next: () => {
                    this.logoutPostAction(redirectLink);
                }
            }),
            catchError((error: AppHttpResponse) => {
                this.logoutPostAction();
                return throwError(() => new Error(error.message));
            })
        );
    }

    logoutPostAction(redirectLink?: string): void {
        this.appUserSubject$.next(<AppUser>{});
        this.storage.removeValueInLocalStorageByItem(APP_USER_STORAGE_KEY);
        this.storage.removeValueInLocalStorageByItem(AUTH_TOKEN);
        if (redirectLink || redirectLink !== null) {
            this.router.navigateByUrl(redirectLink || '/auth/login');
        }
    }

    update({firstName, lastName}: { firstName: string; lastName: string }): Observable<AppUser> {
        return this.http.patch({
            url: `${environment.api.path}/user/current`,
            body: {
                firstName,
                lastName
            }
        }).pipe(
            tap({
                next: (user) => {
                    this.loginPostAction(user);
                    return user;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }

    delete(redirectLink?: string): Observable<boolean> {
        return this.http.delete({
            url: `${environment.api.path}/user/current`
        }).pipe(
            tap({
                next: () => {
                    this.logoutPostAction(redirectLink);
                }
            }),
            catchError((error: AppHttpResponse) => {
                this.logoutPostAction();
                return throwError(() => new Error(error.message));
            })
        );
    }

    resetPassword({email}: {email: string}): Observable<any> {
        return this.http.post({
            url: `${environment.api.path}/auth/password/reset`,
            body: {email}
        }).pipe(
            tap({
                next: (response) => {
                    return response;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }

    checkResetPasswordTokenValidity(token: string): Observable<any> {
        return this.http.get({
            url: `${environment.api.path}/auth/password/reset?token=${token}`
        }).pipe(
            tap({
                next: (response) => {
                    return response;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }

    changePassword({password, confirmPassword, token}: {password: string, confirmPassword: string, token: string}): Observable<any> {
        return this.http.post({
            url: `${environment.api.path}/auth/password/change`,
            body: {password, confirmPassword, token}
        }).pipe(
            tap({
                next: (response) => {
                    return response;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }

    resendVerificationEmail({email}: {email: string}): Observable<any> {
        return this.http.post({
            url: `${environment.api.path}/auth/resend-email`,
            body: {email}
        }).pipe(
            tap({
                next: (response) => {
                    return response;
                }
            }),
            catchError((error: AppHttpResponse) => {
                return throwError(() => new Error(error.message));
            })
        );
    }
}
