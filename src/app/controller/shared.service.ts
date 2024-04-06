import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  product: Product;

  private afficherFormulaireProduitSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireProduit$ = this.afficherFormulaireProduitSubject.asObservable();

  private afficherFormulaireCategorieSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireCategorie$ = this.afficherFormulaireCategorieSubject.asObservable();

  private afficherFormulaireSousCategorieSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireSousCategorie$ = this.afficherFormulaireSousCategorieSubject.asObservable();

  
  private afficherFormulaireuserprofileSubject = new BehaviorSubject<boolean>(false);
  afficherFormulaireuserprofile$ = this.afficherFormulaireuserprofileSubject.asObservable();


  private  afficherFormulaireproducts = new BehaviorSubject<boolean>(false);
  afficherFormulaireproducts$ = this.afficherFormulaireproducts.asObservable();

  private  afficherFormulaireEdit = new BehaviorSubject<boolean>(false);
  afficherFormulaireEdit$ = this.afficherFormulaireEdit.asObservable();

  private  afficherFormulairecategories= new BehaviorSubject<boolean>(false);
  afficherFormulairecategories$ = this.afficherFormulairecategories.asObservable();

  private  afficherFormulairesubcategories = new BehaviorSubject<boolean>(false);
  afficherFormulairesubcategories$ = this.afficherFormulairesubcategories.asObservable();

  constructor( private productService : ProductService , private router: Router ) {}
 
  toggleFormulaireProduit() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireProduitSubject.next(true);
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this. afficherFormulaireproducts.next(false);
    this.afficherFormulairesubcategories.next(false);
    this.afficherFormulairecategories.next(false);
  }

  toggleFormulaireCategorie() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this. afficherFormulaireproducts.next(false);
    this.afficherFormulairesubcategories.next(false);
    this.afficherFormulairecategories.next(false);
  }

  toggleFormulaireSousCategorie() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireSousCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this. afficherFormulaireproducts.next(false);
    this.afficherFormulairesubcategories.next(false);
    this.afficherFormulairecategories.next(false);
  }

  toggleFormulaireuserprofile() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireuserprofileSubject.next(true);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this. afficherFormulaireproducts.next(false);
    this.afficherFormulairesubcategories.next(false);
    this.afficherFormulairecategories.next(false);
  }


  toggleafficherproducts() {
    this.afficherFormulaireEdit.next(false);
    this. afficherFormulaireproducts.next(true);
    this.afficherFormulaireuserprofileSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulairesubcategories.next(false);
    this.afficherFormulairecategories.next(false);
  }
  toggleafficherEdit(productId: number) {
    this.afficherFormulaireEdit.next(true);
    this.afficherFormulaireproducts.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulairesubcategories.next(false);
    this.afficherFormulairecategories.next(false);

    

}
  
toggleaffichercategories() {
  this.afficherFormulairecategories.next(true);
  this.afficherFormulaireEdit.next(false);
  this.afficherFormulaireproducts.next(false);
  this.afficherFormulaireuserprofileSubject.next(false);
  this.afficherFormulaireSousCategorieSubject.next(false);
  this.afficherFormulaireProduitSubject.next(false); 
  this.afficherFormulaireCategorieSubject.next(false);
  this.afficherFormulairesubcategories.next(false);

  

}

toggleaffichersubcategories() {
  this.afficherFormulairecategories.next(false);
  this.afficherFormulairesubcategories.next(true);
  this.afficherFormulaireEdit.next(false);
  this.afficherFormulaireproducts.next(false);
  this.afficherFormulaireuserprofileSubject.next(false);
  this.afficherFormulaireSousCategorieSubject.next(false);
  this.afficherFormulaireProduitSubject.next(false); 
  this.afficherFormulaireCategorieSubject.next(false);

  

}





}