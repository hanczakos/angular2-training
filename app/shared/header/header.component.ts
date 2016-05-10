import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';


@Component({
    selector: 'training-header',
    templateUrl: 'shared/header/header.component.html',
    styleUrls: ['shared/header/header.component.css']
})

export class HeaderComponent implements OnInit {

    actLang: string;

    constructor(private translate: TranslateService) { }

    ngOnInit() {
        this.translate.onLangChange.subscribe(event => {
            this.actLang = event.lang;
        });
    }

    setLang(lang) {
        this.actLang = lang;
        this.translate.use(lang);
    }

}
