import {Component} from '@angular/core';
import {faUser, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    standalone: false,
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.sass'
})
export class Sidebar {

    navItems: { 'name': string, 'icon': IconDefinition, 'link': string }[] = [
        {
            name: 'Пользователи',
            icon: faUser,
            link: '/users'
        }
    ];

    constructor() {
    }
}
