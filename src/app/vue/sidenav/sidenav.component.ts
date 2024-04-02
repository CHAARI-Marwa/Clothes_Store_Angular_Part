import { Component } from '@angular/core';
import { SharedService } from 'src/app/controller/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private sharedService: SharedService) {}

  onClick(type: string) {
    if (type === 'product') {
      this.sharedService.toggleFormulaireProduit();
    } else if (type === 'category') {
      this.sharedService.toggleFormulaireCategorie();
    }
    else if (type === 'souscategory') {
      this.sharedService.toggleFormulaireSousCategorie();
    }

    else if (type === 'userprofile') {
      this.sharedService.toggleFormulaireuserprofile();
    }

    else if (type === 'viewproducts') {
      this.sharedService.toggleafficherproducts();
    }

  
  }
}
