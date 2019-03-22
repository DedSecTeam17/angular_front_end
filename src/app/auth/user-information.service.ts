import {Injectable} from '@angular/core';

import {UserInfo} from './models/UserInfo';


@Injectable({
    providedIn: 'root'
})
export class UserInformationService {
    public User = {
        access_token: null,
        user: null
    };


    constructor() {
    }


    setUser(acceess_token, user) {
        this.User.access_token = acceess_token;
        this.User.user = user;
    }

    saveUserInfoInLocalStorage() {

        localStorage.setItem('access_token', this.User.access_token);
        localStorage.setItem('email', this.User.user.email);
        localStorage.setItem('id', this.User.user.id);
        localStorage.setItem('name', this.User.user.name);


    }

    deleteUserInfoInLocalStorage() {
        localStorage.setItem('access_token', '');
        localStorage.setItem('email', '');
        localStorage.setItem('id', '0');
        localStorage.setItem('name', '');
    }

    getUserInfoFromLocalStorage(): UserInfo {
        return new UserInfo(
            localStorage.getItem('access_token'),
            localStorage.getItem('email'),
            localStorage.getItem('id'),
            localStorage.getItem('name'),
        );
    }


    isAuth(): boolean {

        if (this.getUserInfoFromLocalStorage().access_token != '') {
            return true;
        } else {
            return false;
        }


    }


}

