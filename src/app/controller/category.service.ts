import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Observable } from 'rxjs';
import { souscategory } from '../model/souscategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  addCategory(Category:   Category):Observable<any>{
    return this.http.post<any>('http://localhost:8080/category/first',Category);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/category/first');
  }

  getSubCategoryIds(categoryId: number): Observable<souscategory[]> {
    return this.http.get<souscategory[]>(`http://localhost:8080/category/${categoryId}/sousByFirst`);
  }

}
