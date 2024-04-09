import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/controller/category.service';
import { RegistrationService } from 'src/app/controller/registration.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ProductService } from 'src/app/controller/product.service';
import { DetailsProdPopupComponent } from '../details-prod-popup/details-prod-popup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: any[] = [];
  products: any[] = [];
  searchTerm: string = '';
  similarProducts: any[] = [];


  ngOnInit(): void {
    this.getCategories();
    this.loadProducts();
  }



  constructor(
    public dialog: MatDialog,
    public registrationService: RegistrationService, 
    private categoryService: CategoryService, 
    private router: Router,
    private productservice : ProductService,
  
    ) {}

    loadProducts() {
      this.productservice.getproducts().subscribe(products => {
        this.products = products;
      });
    }

    onSearchChange() {
      // Filtrer les produits similaires en utilisant searchTerm
      this.similarProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      if (this.searchTerm.trim() === '') {
        this.similarProducts = [];
      }
    }

    selectProduct(product: any) {
      console.log("Produit sélectionné :", product);
      // Ouvrir le pop-up avec les détails du produit sélectionné
      this.openDetailsPopup(product.id);
    }
  
    openDetailsPopup(productId: number): void {
      const dialogRef = this.dialog.open(DetailsProdPopupComponent, {
        data: { productId: productId }
      });
    }
  
  toggleUserPopup(userId: number) {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      data: { userId: userId },
      width:'600px',
    });
  } 
  
  handleUserPopupClick(): void {
    const userId = this.registrationService.getUserId(this.registrationService.getToken()!);
    if (typeof userId === 'number') {
      this.toggleUserPopup(userId);
      console.log(userId);
    } else {
      console.error('User ID is not valid');
    }
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
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

  @Output() categorySelected = new EventEmitter<number>();

  onCategorySelected(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }

}
