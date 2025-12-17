import {Component, OnInit} from '@angular/core';
import {UserService} from '../user-service';

@Component({
    selector: 'app-persons',
    standalone: false,
    templateUrl: './all-users.html',
    styleUrl: './all-users.sass',
})
export class AllUsers implements OnInit {
    users!: any[];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    getAllUsers() {
        this.userService.getAllUsers().subscribe(response => this.users = response);
    }
}
