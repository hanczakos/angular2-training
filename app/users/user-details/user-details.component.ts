import { Component, Input, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'user-details',
    templateUrl: 'users/user-details/user-details.component.html'
})

export class UserDetailsComponent implements OnInit {

    user: User;
    newUser: boolean;

    constructor(
        private userService: UserService,
        private router: Router,
        private routeParams: RouteParams
    ) { }

    ngOnInit() {
        if (this.routeParams.params['id']!==null) {
            this.newUser = false;
            this.user = this.userService.getUser(+this.routeParams.params['id']);
        } else {
            this.newUser = true;
            this.user = new User();
        }
    }

    saveUser() {
        if (this.newUser) {
            this.userService.createUser(this.user);
        } else {
            this.userService.updateUser(this.user);
        }
        this.router.navigate(['UserList']);
    }

    cancel() {
        this.router.navigate(['UserList']);
    }

    parseName(input) {
        this.user.name = input.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }

    wordLength(input) {
        return input.split(' ').length;
    }

    setNameLengthStyles() {
        return {
            'color':  this.wordLength(this.user.name)>1 ? 'green' : 'red',
            'font-weight':  this.wordLength(this.user.name)>2 ? 700 : 400
        };
    }

    keyHandler(event) {
        if (event.keyCode===13) {
            alert("The entered email: " + event.target.value);
        }
    }

}
