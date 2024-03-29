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

  // addsouscategory(newSousCategory: souscategory): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(`http://localhost:8080/category/sous`, JSON.stringify(newSousCategory), { headers: headers })
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  public getcategory():Observable<any>{
    return this.http.get<any>('http://localhost:8080/category/first');
  }

  public getSubcategories():Observable<any>{
    return this.http.get<any>('http://localhost:8080/category/sous');
  }
}