import { Component } from '@angular/core';

import { SouscategoryService } from 'src/app/controller/souscategory.service';
import { souscategory } from 'src/app/model/souscategory';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';


@Component({
  selector: 'app-add-sous-category',
  templateUrl: './add-sous-category.component.html',
  styleUrls: ['./add-sous-category.component.css']
})

export class AddSousCategoryComponent {
  souscategoryForm: FormGroup;
  categories: any[] = [];
  selectedCategories: Category[] = [];

  ngOnInit(): void {
    this.getCategories();
  }
  
  constructor(
    private fb: FormBuilder,
    private _service: SouscategoryService,
  ) {
    this.souscategoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
  
  addsouscategory() {
    if (this.souscategoryForm.valid && this.selectedCategories.length > 0) {
    const newSousCategory: souscategory = {
      id: 0, 
      name: this.souscategoryForm.value.name,
      categories: this.selectedCategories
    };
    this._service.addsouscategory(newSousCategory).subscribe(
      () => {
        console.log('Sous-catégorie ajoutée avec succès');
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la sous-catégorie :', error);
      }
    );}
  }

  getCategories(): void {
    this._service.getcategory().subscribe(
      (data: any[]) => {
        this.categories = data.map(category => ({
          id: category.id,
          name: category.name,
          scategories: []
        }));
        console.log(this.categories);
        this.createFormControls();
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des catégories : ', error);
      }
    );
  }

  createFormControls(): void {
    this.categories.forEach(category => {
      this.souscategoryForm.addControl(`category_${category.id}`, new FormControl(false));
    });
  }

  updateSelectedCategories(categoryId: number, isChecked: boolean) {
    const category = this.categories.find(c => c.id === categoryId);
    if (isChecked && category) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.findIndex(c => c.id === categoryId);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
  }
  
}
