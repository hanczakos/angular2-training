import { Component, Input, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { Control, ControlGroup, Validators } from '@angular/common';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { NameOrderPipe } from '../shared/name-order.pipe';
import { ValidationService } from '../../shared/validation/validation.service';
import { ControlMessagesComponent } from '../../shared/validation/control-messages.component';

@Component({
    selector: 'user-details',
    templateUrl: 'users/user-details/user-details.component.html',
    pipes: [ NameOrderPipe ],
    directives: [ ControlMessagesComponent ]
})

export class UserDetailsComponent implements OnInit {

    newUser: boolean;
    initializedUser: boolean = false;

    id: number;
    name: Control = new Control('', Validators.compose([Validators.required, ValidationService.fullNameValidator]));
    email: Control = new Control('', Validators.compose([Validators.required, ValidationService.emailValidator]));
    form: ControlGroup = new ControlGroup({
        "name": this.name,
        "email": this.email
    });

    constructor(
        private userService: UserService,
        private router: Router,
        private routeParams: RouteParams
    ) { }


    ngOnInit() {

        if (this.routeParams.params['id']!==null) {
            this.newUser = false;
            this.userService.getUser(+this.routeParams.params['id']).subscribe(
                user => {
                    this.id = user.id;
                    this.name.updateValue(user.name);
                    this.email.updateValue(user.email);
                    this.initializedUser = true;
                }
            );
        } else {
            this.newUser = true;
            this.initializedUser = true;
        }

        this.form.valueChanges
            .map((value) => {
                value.name = value.name.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
                return value;
            })
            .subscribe((value) => {
                this.name.updateValue(value.name, {emitEvent: false});
            })
        ;

    }

    saveUser() {
        if (this.form.valid) {
            if (this.newUser) {
                this.userService.createUser(this.form.value).subscribe(
                    response => this.router.navigate(['UserList'])
                );
            } else {
                this.userService.updateUser(
                    Object.assign(this.form.value,{ id: this.id })
                ).subscribe(
                    response => this.router.navigate(['UserList'])
                );
            }
        }
    }

    cancel() {
        this.router.navigate(['UserList']);
    }

    wordLength(input) {
        return input.split(' ').length;
    }

    setNameLengthStyles(name) {
        return {
            'color':  this.wordLength(name)>1 ? 'green' : 'red',
            'font-weight':  this.wordLength(name)>2 ? 700 : 400
        };
    }

    keyHandler(event) {
        if (event.keyCode===13) {
            alert("The entered email: " + event.target.value);
            event.stopPropagation();
        }
    }

}
