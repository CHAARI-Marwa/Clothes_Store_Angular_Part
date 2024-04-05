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

  constructor( private productService : ProductService , private router: Router ) {}
 
  toggleFormulaireProduit() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireProduitSubject.next(true);
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this. afficherFormulaireproducts.next(false);
  }

  toggleFormulaireCategorie() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this. afficherFormulaireproducts.next(false);
  }

  toggleFormulaireSousCategorie() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireSousCategorieSubject.next(true);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this. afficherFormulaireproducts.next(false);
  }

  toggleFormulaireuserprofile() {
    this.afficherFormulaireEdit.next(false);
    this.afficherFormulaireuserprofileSubject.next(true);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
    this. afficherFormulaireproducts.next(false);
  }


  toggleafficherproducts() {
    this.afficherFormulaireEdit.next(false);
    this. afficherFormulaireproducts.next(true);
    this.afficherFormulaireuserprofileSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);
  }
  toggleafficherEdit(productId: number) {
    this.afficherFormulaireEdit.next(true);
    this.afficherFormulaireproducts.next(false);
    this.afficherFormulaireuserprofileSubject.next(false);
    this.afficherFormulaireSousCategorieSubject.next(false);
    this.afficherFormulaireProduitSubject.next(false); 
    this.afficherFormulaireCategorieSubject.next(false);

    
   // this.productService.getProductById(productId).subscribe(
     //   (product: Product) => {
       //   this.product = product;
         // console.log(product);
          //  this.router.navigate(['/edit-product', productId]);
        //},
        //(error) => {
         // console.error('Une erreur s\'est produite lors de la récupération des données du produit:', error);
        //}
    //);
}
  



}