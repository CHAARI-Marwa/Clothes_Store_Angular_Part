import { Component } from '@angular/core';
import { CartService } from 'src/app/controller/cart.service';
import { Product } from 'src/app/model/product';
import {DetailsProdPopupComponent} from "../details-prod-popup/details-prod-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {FormulaireCommandePopupComponent} from "../formulaire-commande-popup/formulaire-commande-popup.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  panier: Map<Product, Map<string, number>>;
  panierProducts: Product[]=[];


  constructor(private cartService: CartService,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.getPanierProduits();
  }

  getPanierProduits() {
    this.panier = this.cartService.getPanierProduits();
    this.panierProducts = Array.from(this.panier.keys());
    console.log(this.panier);
    console.log(this.panierProducts);

  }

  toggleProductPopup() {
    const dialogRef = this.dialog.open(FormulaireCommandePopupComponent, {
      width:'900px', height:'650px'
    });
  }
}
