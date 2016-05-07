import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

    private users: User[] = [{
        id: 1,
        name: 'John Doe',
        email: 'john@doemail.com'
    }, {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doemail.com'
    }, {
        id: 3,
        name: 'Jack Doe',
        email: 'jack@doemail.com'
    }];

    getUsers() {
        return this.users;
    }

    getUser(id) {
        return this.users.filter(user => user.id==id)[0];
    }
}