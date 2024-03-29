import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/controller/category.service';
import { ProductService } from 'src/app/controller/product.service';
import { SouscategoryService } from 'src/app/controller/souscategory.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  product: any = {};
  image: File | null = null;
  subcategories: any[] = [];
  categories: any[] = [];



  constructor(
    private souscategoryService: SouscategoryService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
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
  



 
  

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price);
    formData.append('quantity', this.product.quantity);
    formData.append('promotion', this.product.promotion);
    formData.append('fcategory_id', this.product.fcategoryId);
    formData.append('scategory_id', this.product.scategoryId);
    if (this.image) {
      formData.append('image_name', this.image, this.image.name);
    }
    this.productService.addProduct(formData)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }

  onFileSelected(event: any) {
    const selectedFile: File = event.target.files.item(0)!;
    if (selectedFile) {
      const extension: string = this.getFileExtension(selectedFile.name);
      console.log('File name:', selectedFile.name);
      console.log('File extension:', extension);
    }
  }

  getFileExtension(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    return extension ? extension : '';
  }

  handleFileInput(event: any) {
    this.image = event.target.files[0];
  }
}
