import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserRequest } from '../shared/model/user-request.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserRequest>;
    public currentUser: Observable<UserRequest>;

    constructor(private http: HttpClient) {
        let currentUser=localStorage.getItem('currentUser');
        this.currentUserSubject = new BehaviorSubject<UserRequest>(currentUser!=null?JSON.parse(currentUser):'');
        this.currentUser = this.currentUserSubject.asObservable();
    }
    /* public boolean isAdminUser(){
        if(this.currentUser){
            this.currentUser.subscribe(user=>user.roles.includes('admin'));
        }
    } */
    public get currentUserValue(): UserRequest {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`/auth/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next({});
    }
}