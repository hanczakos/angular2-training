import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/user';

@Component({
    selector: 'user-details',
    templateUrl: 'users/user-details/user-details.component.html'
})

export class UserDetailsComponent {

    @Input() user: User;
    @Input() level: number;
    @Output() onLevelRequest = new EventEmitter<Object>();  //TODO Object could be specified with a class definition

    requestLevelChange() {
        this.onLevelRequest.emit({userName: this.user.name, level: this.level});
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
