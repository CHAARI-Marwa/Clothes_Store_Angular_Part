import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }


  public loginUserFromRemote(email: string, password: string):Observable<any>{
    const body = { emailId: email, password: password };
    return this._http.post<any>("http://localhost:8080/login",body)

  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register",user)
  }


}
