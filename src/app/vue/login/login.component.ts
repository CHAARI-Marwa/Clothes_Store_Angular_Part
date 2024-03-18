import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/controller/registration.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _route: Router) {}

  loginUser() {
    console.log('Email:', this.user.emailId);
    console.log('Password:', this.user.password);
    
    this._service.loginUserFromRemote(this.user.emailId, this.user.password)
      .subscribe(
        data => {
          console.log("Response received", data);
          this._route.navigate(['home']);
        },
        error => {
          console.log("Login failed", error);
          this.msg = "Sign in unsuccessful!\nThe email address and password combination you entered does not match our records. Please try again.";
        }
      );
  }
}
