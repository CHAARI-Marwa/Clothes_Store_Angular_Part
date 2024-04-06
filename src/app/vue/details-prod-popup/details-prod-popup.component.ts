import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ProductService } from 'src/app/controller/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-details-prod-popup',
  templateUrl: './details-prod-popup.component.html',
  styleUrls: ['./details-prod-popup.component.css']
})
export class DetailsProdPopupComponent {
  similarProducts: Product[];
  product: Product;
  bigImageSrc: string;
  selectedOption: string;
  sizes: string[];
  quantities: number[];
  maxQuantity: number = 1;
  quantity: number = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct(this.data.productId);
  }

  loadSimilarProducts(pId: number, fId: number, sId: number): void {
    this.productService.getSimilarProducts(2, pId, fId, sId)
      .subscribe(products => {
          this.similarProducts = products;
      });
  }

  getProduct(id: number): void {
    this.productService.getProductById(id)
      .subscribe(
        (product) => {
          this.product=product;
          if (this.product) {
            this.initializeSizesAndQuantities();
            if (this.product.image_name && this.product.image_name.length > 0) {
              this.bigImageSrc = 'assets/img/product/' + this.product.id + this.product.name + '/' + this.product.image_name[0];
            }
            this.loadSimilarProducts(this.product.id, this.product.fcategory_id, this.product.scategory_id);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
  
  initializeSizesAndQuantities(): void {
    if (this.product && this.product.sizeQuantityMap) {
      this.sizes = Object.keys(this.product.sizeQuantityMap);
      this.quantities = Object.values(this.product.sizeQuantityMap);
    }
  }

  changeBigImage(imageSrc: string) {
    this.bigImageSrc = imageSrc;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.maxQuantity = this.quantities[this.sizes.indexOf(option)];
  }

  decreaseQuantity() {
    if (this.selectedOption && this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.selectedOption && this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }

  quickView(productId: number): void{
    this.data.productId=productId;
    this.selectedOption = 'Choose a size';
    this.quantity = 1;
    this.getProduct(productId);
  }

}
