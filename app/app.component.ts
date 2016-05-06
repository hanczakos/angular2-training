import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
    selector: 'training-app',
    templateUrl: 'app.component.html',
    styleUrls: ['base.css'],
    directives: [ HeaderComponent, UserDetailsComponent ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {}
