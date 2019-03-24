import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth-service.service';
import {UserInformationService} from '../../auth/user-information.service';

import {UserInfo} from '../../auth/models/UserInfo';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthStatesService} from '../../auth/auth-states.service';

import { SnotifyService} from 'ng-snotify';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

isLoading:boolean=false;
    public form = {
        email: null,
        password: null
    };
    private userinfo = this.userInfoService.getUserInfoFromLocalStorage();
    public error: string = null;


    constructor(private  authService: AuthService, private  userInfoService: UserInformationService, private router: Router,
                private route: ActivatedRoute, private  authState : AuthStatesService ,private snotifyService: SnotifyService) {
    }


    ngOnInit() {
    }

    onSubmit() {
        this.isLoading=true;
        console.log(this.form.email);
        console.log(this.form.password);

        this.authService.signIn(this.form)
            .subscribe((data) => {
                this.isLoading=false;
                // this.userInfoService.setUser(data.access_token, data.user);
                this.userInfoService.saveUserInfoInLocalStorage();
                // change is logged in state to true
                this.authState.changeIsLoggedInState(true);
                this.router.navigateByUrl('home');
            }, (err) => {
                this.isLoading=false;

                this.handleErr(err);
                console.log(this.error);
            });

        //    reoute user to location

    }


    handleErr(err) {

        this.error = err.error.error;

    }

}

