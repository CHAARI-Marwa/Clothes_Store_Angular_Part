import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<any> {
 
    console.log('Ajout de produit:', product);
    return this.http.post<any>('http://localhost:8080/product/add', product);
  }
}