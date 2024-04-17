import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../model/command';
@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }

  getAllCommands(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/commande/all');
  }

  addCommand(command: Command): Observable<any> {
    return this.http.post<any>('http://localhost:8080/commande/add', command)
  }
}
