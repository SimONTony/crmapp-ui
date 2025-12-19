import {NgModule, provideBrowserGlobalErrorListeners} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing-module';
import {App} from './app';
import {AuthModule} from './pages/auth/auth-module';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {errorInterceptor} from './core/interceptors/error-interceptor';
import {authInterceptor} from './core/interceptors/auth-interceptor';
import {SharedModule} from './shared/shared.module';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura'

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
            withInterceptors([authInterceptor, errorInterceptor])
        ),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: false
                }
            }
        })
    ],
    bootstrap: [App]
})
export class AppModule {
}
