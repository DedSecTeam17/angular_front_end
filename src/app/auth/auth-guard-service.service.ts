import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserInformationService} from './user-information.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements  CanActivate{

  constructor(private  userInfo: UserInformationService,private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.userInfo.isAuth()) {
            return true;
        } else {

            ///We’re using this to remember the URL that the user attempted to navigate to by looking at the state.url property (which is the route that the router attempted to activate
            // but could’t). This is a common pattern in login ﬂows, and you can certainly use query
            // parameters for many other reasons as well in the same way.
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    }
}
