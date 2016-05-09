import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

import { BackendService } from '../../shared/backend/backend.service';
import { User } from './user';

@Injectable()
export class UserService {

    private usersUrl = 'http://localhost:3000/users';

    constructor (private backend: BackendService) {}

    getUsers():Observable<User[]> {
        return this.backend.request<User[],void>('get',this.usersUrl);
    }

    getUser(id: number): Observable<User> {
        return this.backend.request<User,void>('get',this.usersUrl+'/'+id);
    }

    createUser(newUser: User): Observable<User>  {
        return this.backend.request<User,User>('post',this.usersUrl, newUser);
    }

    updateUser(updatedUser: User): Observable<User>  {
        return this.backend.request<User,User>('put',this.usersUrl+'/'+updatedUser.id, updatedUser);
    }

    deleteUser(id: number): Observable<User>  {
        return this.backend.request<User,void>('delete',this.usersUrl+'/'+id);
    }
}