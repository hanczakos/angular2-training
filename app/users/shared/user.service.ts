import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserService {

    private usersUrl = 'http://localhost:3000/users';

    constructor (private http: Http) {}

    getUsers():Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUser(id: number): Observable<User> {
        return this.http.get(this.usersUrl+'/'+id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    createUser(newUser: User): Observable<User>  {
        let body = JSON.stringify(newUser);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usersUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateUser(updatedUser: User): Observable<User>  {
        let body = JSON.stringify(updatedUser);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.usersUrl+'/'+updatedUser.id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteUser(id: number) {
        return this.http.delete(this.usersUrl+'/'+id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        if (error.status === 404) {
            errMsg = 'The route was invalid';
        }
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}