import { Injectable } from '@angular/core';
import {UserInformationService} from './user-information.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatesService {





//  when user info service is change this state is change too
private  isLoggedIn=new BehaviorSubject<Boolean>(this.userInfo.isAuth());
authStatus=this.isLoggedIn.asObservable();


// change status
changeIsLoggedInState(val : boolean){
  this.isLoggedIn.next(val);
}



  constructor(private  userInfo: UserInformationService) { }
}
