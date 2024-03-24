import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddProductModalComponent>
  ) { }

  get modalTitle(): string {
    return this.data.success ? 'add succeeded' : ' problem with the add';
  }

  get modalMessage(): string {
    return this.data.success ? 'Product added successfully !' : 'An error occurred while adding the product';
  }

  closeModal(): void {
    // Fermer la fenêtre modale
    this.dialogRef.close();
  }
}
