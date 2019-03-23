import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './not_found/not-found/not-found.component';
import {SignupComponent} from './components/signup/signup.component';
import {ResponsePasswordComponent} from './password/response-password/response-password.component';
import {RequestPasswordComponent} from './password/request-password/request-password.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardServiceService} from './auth/auth-guard-service.service';
import {BeforeLoggedInGuardService} from './auth/before-logged-in-guard.service';

const routes: Routes = [
    {
      path:'login',component:LoginComponent,canActivate : [BeforeLoggedInGuardService]

    },
    {
        path:'home',component:HomeComponent,canActivate: [AuthGuardServiceService]

    },
    {
        path:'sing_up',component:SignupComponent,canActivate : [BeforeLoggedInGuardService]

    },
    {
        path:'request_password_reset',component:RequestPasswordComponent,canActivate : [BeforeLoggedInGuardService]

    },
    {
        path:'response_password_reset',component:ResponsePasswordComponent,canActivate : [BeforeLoggedInGuardService]

    },
    {
        path:'profile',component:ProfileComponent,canActivate: [AuthGuardServiceService]

    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
