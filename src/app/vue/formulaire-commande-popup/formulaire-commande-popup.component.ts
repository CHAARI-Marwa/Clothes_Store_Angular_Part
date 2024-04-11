import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-commande-popup',
  templateUrl: './formulaire-commande-popup.component.html',
  styleUrls: ['./formulaire-commande-popup.component.css']
})
export class FormulaireCommandePopupComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      paymentType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      // Soumettre le formulaire
      console.log('Formulaire valide, soumission en cours...');
      // this.orderForm.reset(); // Réinitialiser le formulaire si nécessaire
    } else {
      // Afficher un message d'erreur ou effectuer d'autres actions
      console.log('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
