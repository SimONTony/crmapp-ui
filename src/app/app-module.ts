import {NgModule, provideBrowserGlobalErrorListeners} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing-module';
import {App} from './app';
import {AuthModule} from './pages/auth/auth-module';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from '@angular/common/http';
import {ErrorInterceptor} from './core/interceptors/error.interceptor';
import {authInterceptor} from './core/interceptors/auth-interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        App
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        AuthModule
    ],
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(
            withInterceptors([authInterceptor])
        ),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
    ],
    bootstrap: [App]
})
export class AppModule {
}
