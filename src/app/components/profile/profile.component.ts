import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../auth/models/UserInfo';
import {UserInformationService} from '../../auth/user-information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  userInfo: UserInfo;
  constructor(private  userInfoService: UserInformationService) { }

  ngOnInit() {
      this.userInfo= this.userInfoService.getUserInfoFromLocalStorage();
  }

}
