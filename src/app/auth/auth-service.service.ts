import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }





  signIn(form_data) : Observable<Object>{
    return   this.http.post('http://127.0.0.1:8000/api/auth/login', form_data);
  }

  signUp (form_data): Observable<Object>{
    return this.http.post('http://127.0.0.1:8000/api/auth/signup', form_data);
  }


  sendEmailForPasswordReset(form_data) : Observable<Object>{

    return this.http.post('http://127.0.0.1:8000/api/auth/sendPasswordRestLink',form_data);

  }


}
