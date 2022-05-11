import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import firebase from "firebase/app";
import "firebase/auth";
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private fireAuth: AngularFireAuth, private router: Router) {
        this.fireAuth.authState.subscribe(user => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.setItem('user', '');
            }
        })
    }

    async login(email: string, password: string) {
        let result = await this.fireAuth.signInWithEmailAndPassword(email, password);
        if (result)
            this.router.navigate(['home']);
    }

    async register(email: string, password: string) {
        var result = await this.fireAuth.createUserWithEmailAndPassword(email, password)
    }

    async sendPasswordResetEmail(passwordResetEmail: string) {
        return await this.fireAuth.sendPasswordResetEmail(passwordResetEmail);
    }

    async logout() {
        await this.fireAuth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['login']);
    }

    get isAuthenticated(): boolean {
        const user = localStorage.getItem('user');
        return user !== null;
    }
    get isAdmin(): boolean {
        const user = localStorage.getItem('user');
        return user != null && JSON.parse(user)['email'] == 'anbu@gmail.com';
    }
    get loggedInUserName(): string {
        const user = localStorage.getItem('user');
        return user != null ? JSON.parse(user)['email']:'';
    }
    async loginWithGoogle() {
        console.log(firebase);
        await this.fireAuth.signInWithPopup(new firebase.auth.EmailAuthProvider())
        this.router.navigate(['elections']);
    }

    async loginWithFacebook() {
        console.log(firebase);
        await this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        this.router.navigate(['home']);
    }
}