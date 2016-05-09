import { Component, ViewEncapsulation } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BackendService } from './shared/backend/backend.service';
import { UserService } from './users/shared/user.service';
import { UsersComponent } from './users/base/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ValidationService } from './shared/validation/validation.service';
import { ErrorMessagesService } from './shared/validation/error-messages.service';

@Component({
    selector: 'training-app',
    templateUrl: 'app.component.html',
    styleUrls: ['base.css'],
    directives: [ ROUTER_DIRECTIVES, HeaderComponent, MenuComponent ],
    providers: [ ROUTER_PROVIDERS, HTTP_PROVIDERS, BackendService, UserService, ValidationService, ErrorMessagesService ],
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardComponent,
        useAsDefault: true
    }, {
        name: 'Users',
        path: '/users/...',
        component: UsersComponent
    }, {
        path: '/*404',
        redirectTo: ['/Dashboard']
    }
])

export class AppComponent {}
