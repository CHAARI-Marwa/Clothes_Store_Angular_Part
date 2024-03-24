import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from '../vue/add-product-modal/add-product-modal.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openSuccessModal(): void {
    this.dialog.open(AddProductModalComponent, {
      width: '250px',
      data: { success: true }
    });
  }

  openFailureModal(): void {
    this.dialog.open(AddProductModalComponent, {
      width: '250px',
      data: { success: false }
    });
  }
}
