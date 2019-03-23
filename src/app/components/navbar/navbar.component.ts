import { Component, OnInit } from '@angular/core';
import {UserInformationService} from '../../auth/user-information.service';
import {AuthStatesService} from '../../auth/auth-states.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {


  isLoggedIn :Boolean;

  constructor(private  userInfo:UserInformationService, private  loggedInStatus : AuthStatesService , private  router : Router) { }

  ngOnInit() {
     this.loggedInStatus.authStatus.subscribe((val)=>{
       this.isLoggedIn=val;
     })
  }


    logOut(event : MouseEvent){
    event.preventDefault();
        this.userInfo.deleteUserInfoInLocalStorage();
        this.loggedInStatus.changeIsLoggedInState(false);
        this.loggedInStatus.authStatus.subscribe((val)=>{
            this.isLoggedIn=val;
        })
        this.router.navigateByUrl('login');



    }
}
