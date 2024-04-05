import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/controller/product.service';
import { CategoryService } from 'src/app/controller/category.service';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/controller/shared.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent  implements OnInit  {
 
  productData: Product[] = [];
  dataSource: MatTableDataSource<Product>;
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
        this.dataSource = new MatTableDataSource(productData); 
       
     
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Utilisation de dataSource pour le filtrage
    console.log(this.dataSource.filteredData);
  }

     

  editProduct(productId: number) {
     // this.sharedservice.toggleafficherEdit(productId);
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