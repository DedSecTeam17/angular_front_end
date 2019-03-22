import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth-service.service';

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


    constructor(private  authService: AuthService) {
    }


    ngOnInit() {


    }


    onSubmit() {


        this.authService.signUp(this.form).subscribe((response) => {
            console.log(response);
        }, (err) => {
            this.handleError(err);


            // console.log(this.error.email_err);


        });


    }

    handleError(err) {

        this.error = err.error.errors;


    }


}
