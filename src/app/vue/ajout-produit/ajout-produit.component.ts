import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  
  constructor(private productService: ProductService, private modalService: ModalService,private fb: FormBuilder) { }

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
        console.error('Error', error);
        this.modalService.openFailureModal();
      }
    );
  }

  onFileSelected(event: any) {
    const selectedFile: File = event.target.files.item(0)!;
   
    if (selectedFile) {
      const extension: string = this.getFileExtension(selectedFile.name);
      console.log('File name:', selectedFile.name);
      console.log('File extension:', extension);
    }
  }

  getFileExtension(fileName: string): string {
    return fileName.split('.').pop()!.toLowerCase(); 
  }




}
