import { Component } from '@angular/core';
import { SharedService } from 'src/app/controller/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sideBarOpen = true;
  afficherFormulaire: boolean = false;
  constructor(private sharedService: SharedService) {}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit() {
    this.sharedService.afficherFormulaire$.subscribe((afficher) => {
      this.afficherFormulaire = afficher;
    });
  } 
}
