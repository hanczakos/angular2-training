import { Component } from '@angular/core';

export class User {
    id: number;
    name: string;
    email: string;
}

@Component({
    selector: 'user-details',
    templateUrl: 'users/user-details/user-details.component.html'
})

export class UserDetailsComponent {
    user: User = {
        id: 1,
        name: 'John Doe',
        email: 'john@doemail.com'
    };

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
