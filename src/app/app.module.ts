import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RequestPasswordComponent} from './password/request-password/request-password.component';
import {ResponsePasswordComponent} from './password/response-password/response-password.component';
import {NotFoundComponent} from './not_found/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth-service.service';
import {UserInformationService} from './auth/user-information.service';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardServiceService} from './auth/auth-guard-service.service';
import {AuthStatesService} from './auth/auth-states.service';
import {BeforeLoggedInGuardService} from './auth/before-logged-in-guard.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent,
        RequestPasswordComponent,
        ResponsePasswordComponent,
        NotFoundComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        SnotifyModule

    ],
    providers: [AuthService, UserInformationService, AuthGuardServiceService, AuthStatesService, BeforeLoggedInGuardService, {
        provide: 'SnotifyToastConfig',
        useValue: ToastDefaults
    },
        SnotifyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
