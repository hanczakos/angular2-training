import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard/dashboard.component.html',
    pipes: [ TranslatePipe ]
})

export class DashboardComponent implements OnInit {
    today: Date = new Date();
    counter: number = 0;

    ngOnInit() {

        let myObservable = new Observable<number>(observer => {
            let count = 0;
            let interval = setInterval(() => {
                observer.next(count++);
            }, 500);

            //disposal function
            return () => {
                console.log('disposing...');
                clearInterval(interval);
            }
        });

        let subscriber = myObservable.subscribe(
            val => this.counter = val,
            err => console.log(err),
            () => console.log('done')
        );

        setInterval(() => {
            subscriber.unsubscribe();
        },5000)



    }

}
