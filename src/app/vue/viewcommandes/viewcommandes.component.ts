import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommandService } from 'src/app/controller/command.service';
import { Command } from 'src/app/model/command';
import { DeliveryPersonService } from 'src/app/controller/delivery-person.service';

import { Delivery_person } from 'src/app/model/deliveryPerson';
@Component({
  selector: 'app-viewcommandes',
  templateUrl: './viewcommandes.component.html',
  styleUrls: ['./viewcommandes.component.css']
})
export class ViewcommandesComponent implements OnInit{
  commands: any[] = [];
  delivery_persons: Delivery_person[] = [];
  dataSource: MatTableDataSource<Command>;
  displayedColumns: string[] = ['id', 'user_id', 'date', 'adresse', 'postal_code',   'total_price','selectLivreur'];
  constructor(private commandeService: CommandService,
    private deliveryperson : DeliveryPersonService

  ) { }
  ngOnInit(): void {
    this.getCommands();
    this.getdeliverypersons();

  }
  getCommands() {
    this.commandeService.getAllCommands().subscribe((data: any[]) => {
      this.commands = data;
      this.dataSource = new MatTableDataSource(data); 
    });
  }
  getdeliverypersons() {
    this.deliveryperson.getdeliverypersons().subscribe((data: Delivery_person[]) => {
      this.delivery_persons = data;
      console.log(this.delivery_persons);
    });
  }

  

  
  
  


  

}
