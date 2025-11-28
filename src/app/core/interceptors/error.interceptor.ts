import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(catchError((err: HttpErrorResponse) => {
                if ([401, 403].includes(err.status)) {
                    this.authService.logoutPostAction();
                }
                const errorMessage = err.error?.message || err.statusText;
                console.error(errorMessage);
                return throwError(() => new Error(errorMessage));
            }));
    }
}
