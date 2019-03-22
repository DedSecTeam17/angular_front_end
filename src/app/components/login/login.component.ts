import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth-service.service';
import {UserInformationService} from '../../auth/user-information.service';

import {UserInfo} from '../../auth/models/UserInfo';
import {ActivatedRoute, Router} from '@angular/router';


require('../../auth/models/UserInfo');

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


    public form = {
        email: null,
        password: null
    };
    private userinfo = this.userInfoService.getUserInfoFromLocalStorage();
    public error: string = null;


    constructor(private  authService: AuthService, private  userInfoService: UserInformationService, private router: Router,
                private route: ActivatedRoute) {
    }


    ngOnInit() {
    }

    onSubmit() {
        console.log(this.form.email);
        console.log(this.form.password);

        this.authService.signIn(this.form)
            .subscribe((data) => {
                this.userInfoService.setUser(data.access_token, data.user);
                this.userInfoService.saveUserInfoInLocalStorage();
                this.router.navigateByUrl('home');
            }, (err) => {
                this.handleErr(err);
                console.log(this.error);
            });

        //    reoute user to location

    }


    handleErr(err) {

        this.error = err.error.error;

    }

}

