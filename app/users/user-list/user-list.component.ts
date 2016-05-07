import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'users/user-list/user-list.component.html',
    directives: [UserDetailsComponent]
})

export class UserListComponent implements OnInit {

    users: User[];
    activeUserId:number;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.getUsers();
    }

    edit(user) {
        this.activeUserId = user.id;
    }

}
