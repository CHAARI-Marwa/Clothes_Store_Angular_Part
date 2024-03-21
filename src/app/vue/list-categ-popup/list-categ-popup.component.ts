import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categ-popup',
  templateUrl: './list-categ-popup.component.html',
  styleUrls: ['./list-categ-popup.component.css']
})
export class ListCategPopupComponent {
  selectedCategory: string | null = null; // Variable pour stocker la catégorie sélectionnée

  // Méthode appelée lorsqu'un élément de la liste est cliqué
  selectCategory(category: string) {
    this.selectedCategory = category; // Mettre à jour la catégorie sélectionnée
  }

  // Méthode pour vérifier si une catégorie est sélectionnée
  isCategorySelected(category: string): boolean {
    return this.selectedCategory === category;
  }
}
