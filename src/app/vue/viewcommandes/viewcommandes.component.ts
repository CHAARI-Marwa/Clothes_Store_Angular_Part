import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommandService } from 'src/app/controller/command.service';
import { Command } from 'src/app/model/command';
import { DeliveryPersonService } from 'src/app/controller/delivery-person.service';
import { ChangeDetectorRef } from '@angular/core';
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
  displayedColumns: string[] = ['id', 'user_id', 'date', 'adresse', 'postal_code',   'total_price','selectLivreur', 'actions'];
  
  constructor(private commandeService: CommandService,
    private deliveryperson : DeliveryPersonService,
    private cdr: ChangeDetectorRef
    ) { }

    ngAfterViewInit(): void {
      this.cdr.detectChanges(); // Force une nouvelle détection des modifications après l'affichage des vues
    }

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


  getDeliveryByAddress(address: string): string[] {
      let deliveryPeople: string[] = [];
      for (const person of this.delivery_persons) {
          if (person.town === address) {
              deliveryPeople.push(person.name);
          }
      }
      return deliveryPeople;
    }
 
  

  

  
  setDeliveryPersonInCOmmand(id_person: number,id_command: number){
    console.log(id_person,id_command)
  }

  onSelectDelivery(deliveryPerson: any) {
    console.log('Selected delivery person:', deliveryPerson);
    this.cdr.detectChanges();
  }
  assignDeliveryPerson(commandId: number) {
    const foundCommand = this.dataSource.data.find(command => command.id === commandId);
    if (foundCommand) {
      const selectedDeliveryPersonId = foundCommand.deliveryPersonId;
      this.setDeliveryPersonInCOmmand(selectedDeliveryPersonId, commandId);

    } else {
      console.error("Command not found with ID:", commandId);
    }
  }
}
