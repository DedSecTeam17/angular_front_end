import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth-service.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})

export class RequestPasswordComponent implements OnInit {


  constructor(private  authService : AuthService, private  notify: SnotifyService) { }





  isLoading: boolean=false;
  form={
    email : null
  };


  error : null;
  ngOnInit() {
  }


    onSubmit(){
        this.isLoading=true;
        this.authService.sendEmailForPasswordReset(this.form)
        .subscribe((response)=>{
          this.notify.success("Email Sent Successfully" );
            this.isLoading=false;

            console.log(response)

        //    reoute
        },(err)=>{
          console.log(err)
          this.handleErr(err);
            this.isLoading=false;
        });

    }

    handleErr(err){
    this.error=err.error.message;

    }
}
