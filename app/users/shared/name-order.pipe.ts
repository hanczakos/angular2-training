import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user';

@Pipe({name: 'nameOrder', pure: false})

export class NameOrderPipe implements PipeTransform {
    transform(user: User, displayLang: string): string {
        let name:string = user.name;
        if (displayLang==='hu') {
            name = name.substr(name.indexOf(' ')+1) + ' ' + name.substr(0,name.indexOf(' '));
        }
        return name;
    }
}