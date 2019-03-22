import { Component, OnInit } from '@angular/core';
import {UserInformationService} from '../../auth/user-information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private  userInfo:UserInformationService) { }

  ngOnInit() {
  }


    logOut(){
    this.userInfo.deleteUserInfoInLocalStorage();
    }
}
