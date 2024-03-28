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

  constructor(
    private registrationService: RegistrationService, 
    private _route: Router) {}

  loginUser() {
    this.registrationService.loginUser(this.user.emailId, this.user.password)
      .subscribe(
        data => {
          if (data && typeof data === 'object') {
            //console.log("Response received", data);
            // const userId = this.registrationService.getUserId(data.token);
            // const username = this.registrationService.getUserName(data.token);
            // console.log(userId);
            // console.log(username);
            this._route.navigate(['home']);
          } else {
            console.error("Invalid JSON response"/*, data*/);
          }
        },
        error => {
          console.log("Login failed", error);
          this.msg = "Sign in unsuccessful!\nThe email address and password combination you entered does not match our records. Please try again.";
        }
      );
  }
}
