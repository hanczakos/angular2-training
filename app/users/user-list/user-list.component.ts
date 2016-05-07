import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'users/user-list/user-list.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class UserListComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.getUsers();
    }

}
