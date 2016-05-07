import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'training-menu',
    templateUrl: 'shared/menu/menu.component.html',
    styleUrls: ['shared/menu/menu.component.css'],
    directives: [ ROUTER_DIRECTIVES ]
})

export class MenuComponent {}
