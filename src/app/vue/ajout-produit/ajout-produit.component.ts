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


  onCategorySelected(event: any) {
    const categoryId = event.target.value;
    console.log("Catégorie principale sélectionnée :", categoryId);
    this.product.fcategory_id = categoryId;
  
  }
  
  
  onSizeChecked(size: string) {
    
    switch (size) {
      case 'S':
        this.product.quantityS = this.product.sizeS ? null : 0; // Réinitialiser la quantité si la case est décochée
        break;
      case 'M':
        this.product.quantityM = this.product.sizeM ? null : 0;
        break;

        case 'l':
        this.product.quantityL = this.product.sizeL ? null : 0;
        break;
        
        
        case '4a':
          this.product.quantity4a = this.product.size4a ? null : 0;
          break;


          case '5a':
            this.product.quantity5a = this.product.size5a ? null : 0;
            break;


            case '6a':
              this.product.quantity6a = this.product.size6a ? null : 0;
              break;
    
    }
  }
  

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());
    formData.append('promotion', this.product.promotion.toString());
    formData.append('fcategory_id', this.product.fcategory_id.toString());
    formData.append('scategory_id', this.product.scategory_id.toString());
    if (this.image) {
      formData.append('images', this.image, this.image.name);
    }
  
    // Créer des listes pour les tailles sélectionnées et les quantités
    const sizes: string[] = [];
    const quantities: number[] = [];
  
    // Ajouter les tailles sélectionnées et les quantités correspondantes aux listes
    if (this.product.sizeS) {
      sizes.push('S');
      quantities.push(this.product.quantityS);
    }
    if (this.product.sizeM) {
      sizes.push('M');
      quantities.push(this.product.quantityM);
    }
    if (this.product.sizeL) {
      sizes.push('L');
      quantities.push(this.product.quantityL);
    }


    if (this.product.size4a) {
      sizes.push('4a');
      quantities.push(this.product.quantity4a);
    }
    if (this.product.size5a) {
      sizes.push('5a');
      quantities.push(this.product.quantity5a);
    }
    if (this.product.size6a) {
      sizes.push('6a');
      quantities.push(this.product.quantity6a);
    }
  
    // Créer des paires taille-quantité et les ajouter à l'objet FormData
    for (let i = 0; i < sizes.length; i++) {
      formData.append('sizes', sizes[i]);
      formData.append('quantities', quantities[i].toString());
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
