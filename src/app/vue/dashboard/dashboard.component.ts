import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/controller/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideBarOpen = true;
  afficherFormulaireProduit: boolean = false;
  afficherFormulaireCategorie: boolean = false;
  afficherFormulaireSousCategorie: boolean = false;
  afficherFormulaireuserprofile: boolean = false;
  afficherFormulaireproducts : boolean = false;
  afficherFormulaireEdit : boolean = false;
  constructor(private sharedService: SharedService) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit() {
    this.sharedService.afficherFormulaireProduit$.subscribe((afficher) => {
      this.afficherFormulaireProduit = afficher;
    });

    this.sharedService.afficherFormulaireCategorie$.subscribe((afficher) => {
      this.afficherFormulaireCategorie = afficher;
    });

    this.sharedService.afficherFormulaireSousCategorie$.subscribe((afficher) => {
      this.afficherFormulaireSousCategorie = afficher;
    });

    this.sharedService.afficherFormulaireuserprofile$.subscribe((afficher) => {
      this.afficherFormulaireuserprofile = afficher;
    });



    this.sharedService.afficherFormulaireproducts$.subscribe((afficher) => {
      this.afficherFormulaireproducts= afficher;
    });


    this.sharedService.afficherFormulaireEdit$.subscribe((afficher) => {
      this.afficherFormulaireEdit= afficher;
    });



}}
