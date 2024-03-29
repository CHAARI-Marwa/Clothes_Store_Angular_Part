import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { souscategory } from '../model/souscategory';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SouscategoryService {

  constructor(private http: HttpClient) { }

  public addsouscategory(souscategory: souscategory):Observable<void>{
    return this.http.post<void>('http://localhost:8080/category/sous',souscategory);
  }

  public getSubcategories():Observable<any>{
    return this.http.get<any>('http://localhost:8080/category/sous');
  }
}