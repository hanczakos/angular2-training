import { Component, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
    selector: 'user-details',
    templateUrl: 'users/user-details/user-details.component.html'
})

export class UserDetailsComponent {
    //_user: User;

    @Input() user: User;

    @Input() level: number;

   /* @Input() set user(user: User) {
        this._user = user;
        this._user.name = this._user.name.toUpperCase();

        if (user.name==='') {
            this._user.name = 'Unnamed user';
        }
    }

    get user() {
        return this._user;
    }*/

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
