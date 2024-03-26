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

  
  private afficherFormulaireuserprofileSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireuserprofile$ = this.afficherFormulaireuserprofileSubject.asObservable();

  constructor() {}

  toggleFormulaireProduit() {
    this.afficherFormulaireProduitSubject.next(true);
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
  }

  toggleFormulaireCategorie() {
    this.afficherFormulaireCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
  }

  toggleFormulaireSousCategorie() {
    this.afficherFormulaireSousCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
  }

  toggleFormulaireuserprofile() {
    this.afficherFormulaireuserprofileSubject.next(true);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
  }


}
