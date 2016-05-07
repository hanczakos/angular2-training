import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { UserService } from './users/shared/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';

@Component({
    selector: 'training-app',
    templateUrl: 'app.component.html',
    styleUrls: ['base.css'],
    directives: [ ROUTER_DIRECTIVES, HeaderComponent, MenuComponent ],
    providers: [ ROUTER_PROVIDERS, UserService ],
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardComponent,
        useAsDefault: true
    }, {
        name: 'UserList',
        path: '/users',
        component: UserListComponent
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
