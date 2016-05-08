import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { NameOrderPipe } from '../shared/name-order.pipe';

import { HighlightDirective } from '../../shared/highlight/highlight.directive';

@Component({
    selector: 'user-list',
    templateUrl: 'users/user-list/user-list.component.html',
    directives: [ ROUTER_DIRECTIVES, HighlightDirective ],
    pipes: [ NameOrderPipe ]
})

export class UserListComponent implements OnInit {

    users: User[];
    errorMessage: string;
    lang: string = 'en';

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error =>  this.errorMessage = error
        );
    }

    deleteUser(user) {
        this.userService.deleteUser(user.id);
    }

    setLang(lang) {
        this.lang = lang;
    }

}
