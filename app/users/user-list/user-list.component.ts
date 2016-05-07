import { Component } from '@angular/core';
import { User } from '../shared/user';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
    selector: 'user-list',
    templateUrl: 'users/user-list/user-list.component.html',
    directives: [UserDetailsComponent]
})

export class UserListComponent {
    users: User[] = [{
        id: 1,
        name: 'John Doe',
        email: 'john@doemail.com',
        level: 4
    }, {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doemail.com',
        level: 5
    }, {
        id: 3,
        name: 'Jack Doe',
        email: 'jack@doemail.com',
        level: 2
    }];

    activeUser:User;

    messages: string[] = [];

    onLevelRequest(request) {
        this.messages.push(request.userName + ' has requested a change to level ' + request.level);
    }

    edit(user) {
        this.activeUser = user;
    }
}
