import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/controller/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  Category: any={}; 
  CategoryService: any;
  constructor(private categoryservice : CategoryService) { }

  submitForm() {
    this.categoryservice.addCategory(this.Category).subscribe(
      response => {
        console.log('Category added');
       
      },
      error => {
        console.error('error', error);
    
      }
    );
  }
}

    