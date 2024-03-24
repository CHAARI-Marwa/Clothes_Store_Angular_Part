import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { souscategory } from '../model/souscategory';


@Injectable({
  providedIn: 'root'
})
export class SouscategoryService {

  constructor(private http: HttpClient) { }
  addsouscategory(souscategory:   souscategory):Observable<any>{
    return this.http.post<any>('http://localhost:8080/souscategory',souscategory);
}}