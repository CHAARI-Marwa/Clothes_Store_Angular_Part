import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/controller/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(private route: ActivatedRoute ,private productService: ProductService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(
        (product: Product) => {
          this.product = product;
          // Initialiser le formulaire avec les données du produit
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des données du produit:', error);
        }
      );
    });
  }



  
}