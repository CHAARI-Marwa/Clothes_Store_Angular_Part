import { Component } from '@angular/core';

@Component({
  selector: 'app-details-prod-popup',
  templateUrl: './details-prod-popup.component.html',
  styleUrls: ['./details-prod-popup.component.css']
})
export class DetailsProdPopupComponent {
  quantity: number = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  selectedOption: string;
  options: string[] = ['Size XS', 'Size S', 'Size M', 'Size L', 'Size XL'];

  selectOption(option: string) {
    this.selectedOption = option; // Mettre à jour la valeur sélectionnée
  }

  selectedColor: string;

  selectColor(color: string) {
    this.selectedColor = color; // Mettre à jour la couleur sélectionnée
  }

  bigImageSrc: string = './assets/img/detailsproduct1.png'; // Source initiale de la grande image

  changeBigImage(imageSrc: string) {
    this.bigImageSrc = imageSrc;
  }




}
