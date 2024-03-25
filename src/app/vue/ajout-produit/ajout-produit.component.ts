import { Component } from '@angular/core';
import { ProductService } from 'src/app/controller/product.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {

  product: any = {};
  image: File | null = null;

  constructor(private productService: ProductService) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price);
    formData.append('quantity', this.product.quantity);
    formData.append('promotion', this.product.promotion);
    formData.append('fcategory_id', this.product.fcategoryId);
    formData.append('scategory_id', this.product.scategoryId);
    if (this.image) {
      formData.append('image_name', this.image, this.image.name);
    }
    this.productService.addProduct(formData)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }

  handleFileInput(event: any) {
    this.image = event.target.files[0];
  }

}
