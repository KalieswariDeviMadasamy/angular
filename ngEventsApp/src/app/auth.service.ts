import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/auth-service/register";
  private _loginrUrl = "http://localhost:8080/auth-service/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    console.log(this._registerUrl);
    console.log(user);
  }

  loginUser(user) {
    console.log(this._loginrUrl);
    console.log(user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
