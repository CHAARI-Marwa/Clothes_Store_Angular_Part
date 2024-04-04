import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/controller/product.service';
import { CategoryService } from 'src/app/controller/category.service';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/controller/shared.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent  implements OnInit  {

  productData: Product[] = [];
  displayedColumns: string[] = ['name', 'image_name', 'price', 'promotion', 'fcategory_id',   'scategory_id', 'sizeQuantity','actions'];
  category: Category ;
  fcategory_id :number ;

  constructor(private productservice : ProductService , private categoryservice: CategoryService  , private router: Router , private sharedservice : SharedService) { }

  ngOnInit(): void {
    this.getproducts(); 
    
  }

  getproducts() {
    this.productservice.getproducts().subscribe(
      (productData: Product[]) => {
        this.productData = productData; 
        console.log(productData);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    );
  }

  editProduct(productId: number) {
    //this.sharedservice.toggleafficherEdit();
    this.router.navigate(['/edit-product', productId]);
  }

  // Méthode pour supprimer un produit
  deleteProduct(productId: number) {
    this.productservice.deleteProduct(productId).subscribe(
      () => {
        console.log('Produit supprimé avec succès.');
        // Rafraîchir la liste des produits après suppression
        this.getproducts();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression du produit:', error);
      }
    );
  }
  

 }