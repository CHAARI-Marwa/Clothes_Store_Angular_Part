import { Component } from '@angular/core';
import { ProductService } from 'src/app/controller/product.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private productService: ProductService){}
}
