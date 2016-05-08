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
    lang: string = 'en';

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.getUsers();
    }

    deleteUser(user) {
        this.userService.deleteUser(user.id);
    }

    setLang(lang) {
        this.lang = lang;
    }

}
