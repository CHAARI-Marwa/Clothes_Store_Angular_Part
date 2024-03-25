import { Component } from '@angular/core';
import { SouscategoryService } from 'src/app/controller/souscategory.service';
import { souscategory } from 'src/app/model/souscategory';
import {  FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sous-category',
  templateUrl: './add-sous-category.component.html',
  styleUrls: ['./add-sous-category.component.css']
})

export class AddSousCategoryComponent {
  souscategory: souscategory = new souscategory();
  souscategoryForm: FormGroup;
  categories: any[] = [];
  selectedCategories: number[] = [];
  selectedCategoryIds: number[] = []; 

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
    if (this.souscategoryForm.valid) {
      this.souscategory.list_category_id = this.selectedCategoryIds; 
      this.souscategory.name = this.souscategoryForm.value.name;
      this._service.addsouscategory(this.souscategory).subscribe(
        response => {
          console.log('Category added'); 
        },
        error => {
          console.error('error', error);
        }
      );
    }
  }

  getCategories(): void {
    this._service.getcategory().subscribe(
      (data: any[]) => {
        this.categories = data.map(category => ({ id: category.id, name: category.name }));
        console.log(this.categories);
        this.createFormControls();
        console.log(this.categories);
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
    if (isChecked) {
      this.selectedCategoryIds.push(categoryId); // Add category ID to the selected list
    } else {
      const index = this.selectedCategoryIds.indexOf(categoryId);
      if (index !== -1) {
        this.selectedCategoryIds.splice(index, 1); // Remove category ID from the selected list
      }
    }
  }
  
}
