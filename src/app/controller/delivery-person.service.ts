import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {
  constructor(private http: HttpClient) { }

  getdeliverypersons(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/get/deliveryperson');
  }
}
