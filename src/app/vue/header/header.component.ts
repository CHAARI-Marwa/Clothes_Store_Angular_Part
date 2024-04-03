import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/controller/category.service';
import { RegistrationService } from 'src/app/controller/registration.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: any[] = [];

  ngOnInit(): void {
    this.getCategories();
  //   if(this.registrationService.getToken()!=null){
  //   console.log(this.registrationService.getUserId(this.registrationService.getToken()))
  // }
  }

  constructor(
    public dialog: MatDialog,
    public registrationService: RegistrationService, 
    private categoryService: CategoryService, 
    private router: Router
    ) {}
  
  toggleUserPopup(userId: number) {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      data: { userId: userId },
      width:'600px',
    });
  } 
  
  handleUserPopupClick(): void {
    const userId = this.registrationService.getUserId(this.registrationService.getToken()!);
    if (typeof userId === 'number') {
      this.toggleUserPopup(userId);
      console.log(userId);
    } else {
      console.error('User ID is not valid');
    }
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

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

  @Output() categorySelected = new EventEmitter<number>();

  onCategorySelected(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }

}
