import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

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
    searchInput: string = "";
    private searchInputStream = new Subject<string>();

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.searchInputStream
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(term => this.retrieveUsers(term));

        this.retrieveUsers();
    }

    retrieveUsers(queryString?:string) {
        this.userService.getUsers(queryString).subscribe(
            users => this.users = users,
            error =>  this.errorMessage = error
        )
    }

    searchUser(term:string) {
        this.searchInputStream.next(term);
    }

    deleteUser(user) {
        this.userService.deleteUser(user.id).subscribe(
            response => {
                var index = this.users.map(user => user.id).indexOf(response.id);
                this.users.splice(index,1);
            }
        );
    }

    setLang(lang) {
        this.lang = lang;
    }

}
