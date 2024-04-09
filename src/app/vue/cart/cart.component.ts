import { Component } from '@angular/core';
import { CartService } from 'src/app/controller/cart.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  panier: Map<Product, Map<string, number>>;
  panierProducts: Product[]=[];

  constructor(private cartService: CartService) {}
  
  ngOnInit() {
    this.getPanierProduits();
  }

  getPanierProduits() {
    this.panier = this.cartService.getPanierProduits();
    this.panierProducts = Array.from(this.panier.keys());
    console.log(this.panier);
    console.log(this.panierProducts);

  }
}
