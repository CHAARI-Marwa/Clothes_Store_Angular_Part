import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SouscategoryService } from 'src/app/controller/souscategory.service';


@Component({
  selector: 'app-add-sous-category',
  templateUrl: './add-sous-category.component.html',
  styleUrls: ['./add-sous-category.component.css']
})
export class AddSousCategoryComponent {
  toppings = this._formBuilder.group({
    man: false,
    women: false,
    younggirl: false,
    youngboy: false,
  });

  souscategory: any = {}; 
  constructor(private souscategoryService: SouscategoryService, private _formBuilder: FormBuilder) { }

  submitForm() {
    this.souscategoryService.addsouscategory(this.souscategory).subscribe(
      response => {
        console.log('Category added');
      },
      error => {
        console.error('error', error);
      }
    );
  }

 
}
