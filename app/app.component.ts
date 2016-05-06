import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { UserListComponent } from './users/user-list/user-list.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
    selector: 'training-app',
    templateUrl: 'app.component.html',
    styleUrls: ['base.css'],
    directives: [ HeaderComponent, UserListComponent ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {}
