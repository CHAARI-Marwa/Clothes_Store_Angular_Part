import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ListCategPopupComponent} from "../list-categ-popup/list-categ-popup.component";
import {DetailsProdPopupComponent} from "../details-prod-popup/details-prod-popup.component";
import { ProductService } from 'src/app/controller/product.service';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/controller/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = ['assets/img/h11.png', 'assets/img/h22.png']; // Liste des images
  currentIndex: number = 0; // Index de l'image actuellement affichée
  categories: any[] = [];
  products: Product[] = [];
  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
    // Changer l'image toutes les 3 secondes
    timer(3000, 3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }

  toggleSousCategoriesPopup(categoryId: number) {
    const dialogRef = this.dialog.open(ListCategPopupComponent, {
      width: '400px',
      height:'410px',
      data: { categoryId: categoryId }
    });
  }

  togglePopup() {
    const dialogRef = this.dialog.open(DetailsProdPopupComponent, {
      width: '2000px',height:'700px'
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data.map(category => ({
          id: category.id,
          name: category.name,
          scategories: []
        }));
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des catégories : ', error);
      }
    );
  }
getProducts(): void {
  this.productService.getproducts().subscribe(
    (data: any[]) => {
      this.products = data.map(product => ({ 
        id: product.id, 
        name: product.name,
        price: product.price,
        promotion: product.promotion,
        fcategory_id: product.fcategory_id,
        scategory_id: product.scategory_id,
        image_name: product.image_name,
        // Ajoutez les informations sur les tailles et quantités
        sizeQuantityMap: {
          'S': product.sizeQuantityMap['S']?.quantity || 0,
          'M': product.sizeQuantityMap['M']?.quantity || 0,
          'L': product.sizeQuantityMap['L']?.quantity || 0,
          '4a': product.sizeQuantityMap['4a']?.quantity || 0,
          '5a': product.sizeQuantityMap['5a']?.quantity || 0,
          '6a': product.sizeQuantityMap['6a']?.quantity || 0,
          // Ajoutez les autres tailles ici en fonction de votre modèle
        }
      }));
    },
    (error: any) => {
      console.log('Erreur lors de la récupération des produits : ', error);
    }
  );
}

   
}
