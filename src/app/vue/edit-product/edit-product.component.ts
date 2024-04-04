import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/controller/product.service';
import { Product } from 'src/app/model/product';
import { SouscategoryService } from 'src/app/controller/souscategory.service';
import { CategoryService } from 'src/app/controller/category.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number;
  product: Product;
  images: FileList | File | null = null;
  subcategories: any[] = [];
  categories: any[] = [];

  constructor(private route: ActivatedRoute ,private productService: ProductService , private souscategoryService: SouscategoryService,
   
    private categoryService: CategoryService
    ) { }
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(
        (product: Product) => {
          this.product = product;
         console.log(product);
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des données du produit:', error);
        }
      );
    });

    this.getSubCategories();
  }

 

  getSubCategories(): void{
    this.souscategoryService.getSubcategories().subscribe(
      (data: any) => {
        this.subcategories = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSubcategorySelected(event: any) {
    const subcategoryId = event.target.value;
    this.categoryService.getCategoriesBySubCategoryId(subcategoryId).subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onCategorySelected(event: any) {
    const categoryId = event.target.value;
    console.log("Catégorie principale sélectionnée :", categoryId);
    this.product.fcategory_id = categoryId;
  }

  handleFileInput(event: any) {
    const files: FileList | null = event.target.files;
    if (files) {
        this.images = files;
    }
  }

  
}