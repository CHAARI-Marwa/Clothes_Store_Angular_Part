import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

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

  getRandomProducts(x: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/product/${x}`);
  }

  getProductById(x: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/product/Id${x}`);
  }

  getProductsByCategoryIds(fcategoryId: number, scategoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/product/bycategories?fcategoryId=${fcategoryId}&scategoryId=${scategoryId}`);
  }
  
}