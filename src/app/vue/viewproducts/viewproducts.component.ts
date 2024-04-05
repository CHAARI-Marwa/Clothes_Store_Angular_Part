import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/controller/product.service';
import { CategoryService } from 'src/app/controller/category.service';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/controller/shared.service';
import { SouscategoryService } from 'src/app/controller/souscategory.service';
import { souscategory } from 'src/app/model/souscategory';
import { forkJoin } from 'rxjs';

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
  subcategory: souscategory;
  fcategory_id :number ;
  categoryNames: { [key: number]: string } = {};
  subcategoryNames: { [key: number]: string } = {};


 
  constructor(
    private productService : ProductService,
    private categoryService: CategoryService,
    private subCategoryService: SouscategoryService,
    private router: Router,
    private sharedservice : SharedService
  ) { }

  ngOnInit(): void {
    this.getproducts();
  }
 
  getproducts() {
    this.productService.getproducts().subscribe(
      (productData: Product[]) => {
        this.productData = productData;
        this.dataSource = new MatTableDataSource(productData); 
       
     
        this.productData = productData; 
        // console.log(productData);
        this.fetchCategoryNames();
        this.fetchSubcategoryNames();
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

     
  fetchCategoryNames() {
    const observables = this.productData.map(product => this.categoryService.getCategoryById(product.fcategory_id));
    forkJoin(observables).subscribe(
      (categories: Category[]) => {
        categories.forEach((category, index) => {
          this.categoryNames[this.productData[index].fcategory_id] = category.name;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCategoryName(categoryId: number): string {
    return this.categoryNames[categoryId] || ''; // Retourne le nom de la sous-catégorie correspondant à l'ID ou une chaîne vide si le nom n'est pas trouvé
  }

  fetchSubcategoryNames() {
    const observables = this.productData.map(product => this.subCategoryService.getSubcategoryById(product.scategory_id));
    forkJoin(observables).subscribe(
      (subcategories: souscategory[]) => {
        subcategories.forEach((subcategory, index) => {
          this.subcategoryNames[this.productData[index].scategory_id] = subcategory.name;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSubcategoryName(scategoryId: number): string {
    return this.subcategoryNames[scategoryId] || ''; // Retourne le nom de la sous-catégorie correspondant à l'ID ou une chaîne vide si le nom n'est pas trouvé
  }

  editProduct(productId: number) {
     // this.sharedservice.toggleafficherEdit(productId);
    this.router.navigate(['/edit-product', productId]);
  }

  // Méthode pour supprimer un produit
  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
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