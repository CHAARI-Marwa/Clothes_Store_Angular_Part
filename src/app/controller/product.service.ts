import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}


  addProduct(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:8080/product/add', formData);

  }

  public getproducts():Observable<any>{
    return this.http.get<any>('http://localhost:8080/product');
  }
  
}