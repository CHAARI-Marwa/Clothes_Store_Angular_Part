import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ListCategPopupComponent} from "../list-categ-popup/list-categ-popup.component";
import {DetailsProdPopupComponent} from "../details-prod-popup/details-prod-popup.component";
import { ProductService } from 'src/app/controller/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = ['assets/img/h11.png', 'assets/img/h22.png']; // Liste des images
  currentIndex: number = 0; // Index de l'image actuellement affichée
  products: Product[] = [];
  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    // Changer l'image toutes les 3 secondes
    timer(3000, 3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }

  toggleWomenPopup() {
    const dialogRef = this.dialog.open(ListCategPopupComponent, {
      width: '400px',height:'410px'
    });
  }

  togglePopup() {
    const dialogRef = this.dialog.open(DetailsProdPopupComponent, {
      width: '2000px',height:'700px'
    });
  }


  getProducts(): void {
    this.productService.getproducts().subscribe(
      (data: any[]) => {
        this.products = data.map(product => ({ 
          id: product.id, 
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          promotion: product.promotion,
          fcategory_id: product.fcategory_id,
          scategory_id: product.scategory_id,
          size:product.size,
          color:product.color,
          image_name: product.image_name,
        }));
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des catégories : ', error);
      }
    );
  }
   
}
