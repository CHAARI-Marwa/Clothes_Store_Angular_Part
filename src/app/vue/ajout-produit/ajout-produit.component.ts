import { Component } from '@angular/core';
import { ModalService } from 'src/app/controller/modal.service';
import { ProductService } from 'src/app/controller/product.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  product: any = {};
  afficherFormulaire: boolean = false;

  constructor(private productService: ProductService, private modalService: ModalService) { }

  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }

  submitForm() {
    this.productService.addProduct(this.product).subscribe(
      response => {
        console.log('Product added');
        this.modalService.openSuccessModal();
      },
      error => {
        console.error('Erreur lors de l\'ajout du produit:', error);
        this.modalService.openFailureModal();
      }
    );
  }
}
