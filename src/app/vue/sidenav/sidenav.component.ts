import { Component } from '@angular/core';
import { SharedService } from 'src/app/controller/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private sharedService: SharedService) {}

  onClick() {
    this.sharedService.toggleFormulaire();
  }
}
