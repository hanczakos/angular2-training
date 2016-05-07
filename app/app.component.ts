import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { UserService } from './users/shared/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
    selector: 'training-app',
    templateUrl: 'app.component.html',
    styleUrls: ['base.css'],
    directives: [ HeaderComponent, ROUTER_DIRECTIVES ],
    providers: [ UserService, ROUTER_PROVIDERS ],
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([
    {
        name: 'UserList',
        path: '/users',
        component: UserListComponent,
        useAsDefault: true
    }, {
        name: 'UserDetails',
        path: '/users/:id',
        component: UserDetailsComponent
    }, {
        path: '/*404',
        redirectTo: ['/UserList']
    }
])

export class AppComponent {}
