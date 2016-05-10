import { Component, ViewEncapsulation } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TRANSLATE_PROVIDERS, TranslateService } from 'ng2-translate/ng2-translate';

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
    providers: [ ROUTER_PROVIDERS, HTTP_PROVIDERS, TRANSLATE_PROVIDERS, BackendService, UserService, ValidationService, ErrorMessagesService ],
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

export class AppComponent {
    constructor(translate: TranslateService) {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(hu|en)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);

    }
}
