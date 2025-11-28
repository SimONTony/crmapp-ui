import {NgModule} from '@angular/core';
import {Login} from './login/login';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {Auth} from './auth';
import {AuthRoutingModule} from './auth-routing-module';


@NgModule({
    declarations: [
        Login,
        Auth,
    ],
    exports: [
        Login,
        Auth
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {
}
