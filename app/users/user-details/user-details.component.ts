import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'user-details',
    templateUrl: 'users/user-details/user-details.component.html'
})

export class UserDetailsComponent implements OnInit{

    @Input() userId: number;
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user = this.userService.getUser(this.userId);
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
