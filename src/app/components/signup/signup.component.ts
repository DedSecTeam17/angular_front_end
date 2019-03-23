import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth-service.service';
import {UserInformationService} from '../../auth/user-information.service';
import {Route, Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public error: null;
    public form = {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
    };

    public password: null;


    constructor(private  authService: AuthService , private  userInfoService : UserInformationService , private  router : Router) {
    }


    ngOnInit() {


    }


    onSubmit() {
        this.authService.signUp(this.form).subscribe((response) => {
            this.userInfoService.setUser(response.access_token , response.user);
            this.userInfoService.saveUserInfoInLocalStorage();
            this.router.navigateByUrl('home');
        }, (err) => {
            this.handleError(err);
        });
    }

    handleError(err) {

        this.error = err.error.errors;


    }


}
