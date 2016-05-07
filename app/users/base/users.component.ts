import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
    selector: 'users',
    templateUrl: 'users/base/users.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})

@RouteConfig([
    {
        name: 'UserList',
        path: '/',
        component: UserListComponent,
        useAsDefault: true
    }, {
        name: 'UserDetails',
        path: '/:id',
        component: UserDetailsComponent
    }
])

export class UsersComponent {}
