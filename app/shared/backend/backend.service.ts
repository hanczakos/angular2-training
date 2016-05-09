import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BackendService {

    constructor (private http: Http) {}

    request<T1,T2>(method: string, url: string, data?: T2 ): Observable<T1> {
        let config = new RequestOptions({
            method: method,
            headers: new Headers()
        });
        if (data) {
            config.body = JSON.stringify(data);
            config.headers.append("Content-Type", 'application/json');
        }
        return this.http.request(url, config).map(res => {
            if (res.status < 200 || res.status >= 300) {
                throw new Error('Bad response status: ' + res.status);
            }
            let body = res.json();
            return body || { };
        }).catch(error => {
            let errMsg = error.message || 'Server error';
            if (error.status === 404) {
                errMsg = 'The route was invalid';
            }
            console.error(errMsg);
            return Observable.throw(errMsg);
        });
    }

}