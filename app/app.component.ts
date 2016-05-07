import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from './users/shared/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
    selector: 'training-app',
    templateUrl: 'app.component.html',
    styleUrls: ['base.css'],
    directives: [ HeaderComponent, UserListComponent ],
    providers: [ UserService ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {}
