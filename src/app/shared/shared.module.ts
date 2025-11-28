import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Header} from './components/header/header';
import {Sidebar} from './components/sidebar/sidebar';
import {EnumKeyToValuePipe} from './pipes/enum-key-to-value-pipe';
import {EnumValueToKeyPipe} from './pipes/enum-value-to-key-pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        FontAwesomeModule
    ],
    declarations: [
        Header,
        Sidebar,
        EnumKeyToValuePipe,
        EnumValueToKeyPipe
    ],
    exports: [
        Header,
        Sidebar,
        EnumKeyToValuePipe,
        EnumValueToKeyPipe
    ]
})

export class SharedModule {
}
