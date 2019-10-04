import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}

  constructor(private _auth: AuthService, private _route: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData);
    localStorage.setItem('token','abcdefg.1234567.uvwxyz');
    this._route.navigate(['/specialEvents'])
  }

}
