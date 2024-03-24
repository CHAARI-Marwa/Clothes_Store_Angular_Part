import { Component } from '@angular/core';
import { SouscategoryService } from 'src/app/controller/souscategory.service';

@Component({
  selector: 'app-add-sous-category',
  templateUrl: './add-sous-category.component.html',
  styleUrls: ['./add-sous-category.component.css']
})
export class AddSousCategoryComponent {
 
  souscategory: any={}; 
  souscategoryService: any;
  constructor(private souscategoryservice : SouscategoryService) { }

  submitForm() {
    this.souscategoryservice.addsouscategory(this.souscategory).subscribe(
      response => {
        console.log('Category added');
       
      },
      error => {
        console.error('error', error);
    
      }
    );
  }
}
