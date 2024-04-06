import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/controller/category.service';
import { Category } from 'src/app/model/category';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-viewcategories',
  templateUrl: './viewcategories.component.html',
  styleUrls: ['./viewcategories.component.css']
})
export class ViewcategoriesComponent  implements OnInit {
  categoryData: Category[] = [];
  displayedColumns: string[] = ['id', 'name','actions'];
  dataSource: MatTableDataSource<Category>;

 

  constructor(
  
    private categoryService: CategoryService
  
  ) { }
  ngOnInit(): void {
    this.getcategories();
  }


  getcategories() {
    this.categoryService.getCategories().subscribe(
      (categoryData: Category[]) => {
        this.categoryData = categoryData;
        this.dataSource = new MatTableDataSource(categoryData); 
  
       
     
   
         console.log(categoryData);
        
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    );
  }

  deletecategory(souscategoryId: number) {
    this.categoryService.deletecategory(souscategoryId).subscribe(
      () => {
        console.log('Produit supprimé avec succès.');
        // Rafraîchir la liste des produits après suppression
        this.getcategories();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression du produit:', error);
      }
    );
  }

}
