import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile-popup',
  templateUrl: './edit-profile-popup.component.html',
  styleUrls: ['./edit-profile-popup.component.css']
})
export class EditProfilePopupComponent {

  constructor(public dialogRef: MatDialogRef<EditProfilePopupComponent>,
              private router: Router) { }

  closeAndRedirectToHome(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/home');
  }
}
