import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

import { HighlightDirective } from '../../shared/highlight/highlight.directive';

@Component({
    selector: 'user-list',
    templateUrl: 'users/user-list/user-list.component.html',
    directives: [ ROUTER_DIRECTIVES, HighlightDirective ]
})

export class UserListComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.getUsers();
    }

    deleteUser(user) {
        this.userService.deleteUser(user.id);
    }

}
