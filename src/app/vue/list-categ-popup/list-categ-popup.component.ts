import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CategoryService } from 'src/app/controller/category.service';
import { souscategory } from 'src/app/model/souscategory';

@Component({
  selector: 'app-list-categ-popup',
  templateUrl: './list-categ-popup.component.html',
  styleUrls: ['./list-categ-popup.component.css']
})
export class ListCategPopupComponent {
  subCategory: souscategory[] = [];
  selectedCategory: string | null = null; // Variable pour stocker la catégorie sélectionnée

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) {
    console.log('ID de la catégorie sélectionnée :', this.data.categoryId);
  }


  ngOnInit(): void {
    this.categoryService.getSubCategoryIds(this.data.categoryId)
      .subscribe(data => {
        this.subCategory= data;
        console.log('Identifiants des sous-catégories :', this.subCategory);
      });
  }

  // Méthode appelée lorsqu'un élément de la liste est cliqué
  selectCategory(category: string) {
    this.selectedCategory = category; // Mettre à jour la catégorie sélectionnée
  }

  // Méthode pour vérifier si une catégorie est sélectionnée
  isCategorySelected(category: string): boolean {
    return this.selectedCategory === category;
  }
}
