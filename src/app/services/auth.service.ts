import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'https://localhost:44384/api/account/register';
  private loginUrl = 'https://localhost:44384/api/account/login';  

  constructor( private http: HttpClient ) { }

  registerUser(user: { fullName: string; password: string; confirmationPassword: string; email: string; birthday: string; phone: string; gender: string; }) {
    return this.http.post<any>(this.registerUrl, user);  
  }

  loginUser(user: { email: string; password: string; }) {
    return this.http.post<any>(this.loginUrl, user, { observe: 'response'});
  }

  loginOn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
