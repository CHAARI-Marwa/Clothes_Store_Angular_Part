import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class CategoryService {

 constructor(private http: HttpClient) { }

 addCategory(category: Category): Observable<any> {
    return this.http.post<any>('http://localhost:8080/category/first', category);
 }

 getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/category/first');
 }

 getCategoriesBySubCategoryId(subCategoryId: number): Observable<any[]> {
   return this.http.get<any[]>(`http://localhost:8080/category/subcategory/${subCategoryId}`);
 }

}
