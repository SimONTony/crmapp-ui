import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing-module';
import {AllUsers} from './all/all-users';
import {TableModule} from 'primeng/table';


@NgModule({
    declarations: [
        AllUsers
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        UserRoutingModule,
        TableModule
    ]
})
export class UserModule {
}
