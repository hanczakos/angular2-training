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

    getUser(id: number) {
        return new User(this.users.filter(user => user.id==id)[0]);
    }

    createUser(newUser: User) {
        this.users.unshift(newUser);
    }

    updateUser(updatedUser: User) {
        this.users.forEach((user, index) => {
            if (user.id===updatedUser.id) {
                this.users[index] = new User(updatedUser);
            }
        });
    }

    deleteUser(id: number) {
        this.users.forEach((user, index) => {
            if (user.id===id) {
                this.users.splice(index,1);
            }
        });
    }

}