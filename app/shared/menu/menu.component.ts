import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'training-menu',
    templateUrl: 'shared/menu/menu.component.html',
    styleUrls: ['shared/menu/menu.component.css'],
    directives: [ ROUTER_DIRECTIVES ]
})

export class MenuComponent {

    currentRouteBase: string;

    constructor(private router: Router) {
        router.subscribe((val) => this.currentRouteBase = val.split('/')[0]);
    }

}
