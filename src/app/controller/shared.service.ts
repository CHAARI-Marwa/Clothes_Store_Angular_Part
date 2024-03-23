import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private afficherFormulaireSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaire$ = this.afficherFormulaireSubject.asObservable();

  constructor() {}

  toggleFormulaire() {
    this.afficherFormulaireSubject.next(true);
  }
}
