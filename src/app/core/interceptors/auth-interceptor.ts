import {HttpInterceptorFn} from '@angular/common/http';
import {AUTH_TOKEN} from '../auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const authToken = localStorage.getItem(AUTH_TOKEN);

    if (authToken) {
        const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${authToken}`)
        });
        return next(authReq);
    }

    return next(request);
};
