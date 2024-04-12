import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from "../../controller/registration.service";
import { User } from "../../model/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulaire-commande-popup',
  templateUrl: './formulaire-commande-popup.component.html',
  styleUrls: ['./formulaire-commande-popup.component.css']
})
export class FormulaireCommandePopupComponent implements OnInit {
  orderForm: FormGroup;
  currentUser: User;
  userForm: FormGroup;
  msg: { status: number, message: string } = { status: 0, message: '' };
  user: User = new User();


  constructor(
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private _route: Router,
    private registrationService: RegistrationService // Injection du service
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      emailId: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      paymentType: ['', Validators.required]
    });

    const userId = this.registrationService.getUserId(this.registrationService.getToken()!);
    if (userId) {
      this.registrationService.getUserById(userId).subscribe(
        (user) => {
          this.currentUser = user;
          this.orderForm.patchValue({
            firstName: this.currentUser.name,
            lastName: this.currentUser.surname,
            phoneNumber: this.currentUser.phoneNumber,
          });
        },
        (error) => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
        }
      );
    } else {
      console.error('Impossible de récupérer l\'ID de l\'utilisateur actuellement connecté.');
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.user = new User(); // Création d'une nouvelle instance de User
      this.user.name = this.userForm.value.name;
      this.user.surname = this.userForm.value.surname;
      this.user.phoneNumber = this.userForm.value.phoneNumber;
      this.user.emailId = this.userForm.value.emailId;
      this.user.password = this.userForm.value.password;
      this.user.gender = this.userForm.value.gender;

      this.registrationService.registerUserFromRemote(this.user).subscribe(
        data => {
          // console.log("response received");
          this._route.navigate(['login']);
        },
        error => {
          // console.error("error:", error);
          if (error.status === 400) {
            this.msg.message = "Bad request. Please check your input.";
          } else if (error.status === 401) {
            this.msg.message = "Unauthorized. Please check your credentials.";
          } else if (error.status === 409){
            this.msg.message = error.error.message;
          } else{
            this.msg.message = "An error occurred. Please try again later.";
          }
        }
      );
    } else {
      this.msg.message = "Please fill out all required fields correctly.";
    }
  }
}
