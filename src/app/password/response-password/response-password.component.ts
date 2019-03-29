import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AuthService} from '../../auth/auth-service.service';

@Component({
  selector: 'app-response-password',
  templateUrl: './response-password.component.html',
  styleUrls: ['./response-password.component.css']
})
export class ResponsePasswordComponent implements OnInit {
    public form = {
        email: null,
        password: null,
        password_confirmation: null,
        resetToken:null
    };
    isLoading:boolean;
    public error : string = null;


  constructor(private  activeRoute:ActivatedRoute,private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }


    onSubmit(){

        this.activeRoute.queryParams.subscribe((prams)=>{
            this.form.resetToken= prams['token'];
        });
        this.isLoading=true;

    this.authService.changePassword(this.form).subscribe((response)=>{
      console.log(response);
        this.isLoading=false;
        this.router.navigateByUrl('/login');

    },(err)=>{
      console.log(err)
      this.error=err.error.message;
        this.isLoading=false;

    });




    }
}
