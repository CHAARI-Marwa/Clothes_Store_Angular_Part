import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/controller/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public registrationService: RegistrationService) {}

}
