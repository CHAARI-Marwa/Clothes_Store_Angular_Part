import { Component } from '@angular/core';

import { ProductService } from 'src/app/controller/product.service';


@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  product: any = {};

  afficherFormulaire: boolean = false;

  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;}

    
    constructor(private productService: ProductService) { }

    submitForm() {
      this.productService.addProduct(this.product).subscribe(
        response => {
          console.log('Produit ajouté avec succès:');
        },
        error => {
          console.error('Erreur lors de l\'ajout du produit:', error);
        }
      );
    }
  }
  
  
