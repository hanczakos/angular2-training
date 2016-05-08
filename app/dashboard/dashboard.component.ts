import { Component, OnInit } from '@angular/core';
import { Observable } from 'RxJs';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    today: Date = new Date();

    ngOnInit() {

        let myObservable = new Observable(observer => {
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
            val => console.log(val),
            err => console.log(err),
            () => console.log('done')
        );

        setInterval(() => {
            subscriber.unsubscribe();
        },5000)



    }

}
