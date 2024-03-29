import { Component } from '@angular/core';
import { CategoryService } from 'src/app/controller/category.service';
import { RegistrationService } from 'src/app/controller/registration.service';
import { SouscategoryService } from 'src/app/controller/souscategory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: any[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  constructor(public registrationService: RegistrationService,private categoryService: CategoryService) {}

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data.map(category => ({
          id: category.id,
          name: category.name,
          scategories: []
        }));
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des catégories : ', error);
      }
    );
  }

}
