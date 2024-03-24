import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private afficherFormulaireProduitSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireProduit$ = this.afficherFormulaireProduitSubject.asObservable();

  private afficherFormulaireCategorieSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireCategorie$ = this.afficherFormulaireCategorieSubject.asObservable();

  private afficherFormulaireSousCategorieSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireSousCategorie$ = this.afficherFormulaireSousCategorieSubject.asObservable();

  constructor() {}

  toggleFormulaireProduit() {
    this.afficherFormulaireProduitSubject.next(true);
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
  }

  toggleFormulaireCategorie() {
    this.afficherFormulaireCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireSousCategorieSubject.next(false);
  }

  toggleFormulaireSousCategorie() {
    this.afficherFormulaireSousCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
  }
}
