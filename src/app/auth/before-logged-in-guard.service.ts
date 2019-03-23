import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserInformationService} from './user-information.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoggedInGuardService implements CanActivate{

  constructor(private  userInfo : UserInformationService, private  router : Router) { }


    // allow user access route if it true in our case if user logged in it,s true user cant access route if he is looged out he can access it
    // great  example password reset
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (this.userInfo.isAuth()==false){
       return true;
     } else {

         this.router.navigate(['/home'], {
             queryParams: {
                 return: state.url
             }
         });

         return false;

     }
    }
}
