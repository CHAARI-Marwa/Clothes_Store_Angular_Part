import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/controller/registration.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  user=new User();
  //msg='';
  msg: { status: number, message: string } = { status: 0, message: '' };

  constructor(private _service : RegistrationService, private _route: Router){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("reponse received")
        this._route.navigate(['login'])
      },
      error=>{
        console.log("reponse received")
        this.msg.message="Bad credentials please enter valid email and password"

      }
    )
  }

}
