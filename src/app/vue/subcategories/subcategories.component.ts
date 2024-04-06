import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/controller/category.service';
import { SouscategoryService } from 'src/app/controller/souscategory.service';
import { souscategory } from 'src/app/model/souscategory';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent  implements OnInit {
  subcategoryData: souscategory[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<souscategory>;

 constructor(
  
    private souscategoryService: SouscategoryService
  
  ) { }
  ngOnInit(): void {
    this.getSubcategories();
  }

  getSubcategories() {
    this.souscategoryService.getSubcategories().subscribe(
      (subcategoryData: souscategory[]) => {
        this.subcategoryData = subcategoryData;
        this.dataSource = new MatTableDataSource(subcategoryData); 
  
       
     
   
         console.log(subcategoryData);
        
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    );
  }

    deletesouscategory(souscategoryId: number) {
      this.souscategoryService.deletesouscategory(souscategoryId).subscribe(
        () => {
          console.log('Produit supprimé avec succès.');
          // Rafraîchir la liste des produits après suppression
          this.getSubcategories();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la suppression du produit:', error);
        }
      );
    }
    

}
