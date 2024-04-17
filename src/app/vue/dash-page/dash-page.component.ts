import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { DeliveryPersonService } from 'src/app/controller/delivery-person.service';
import { ProductService } from 'src/app/controller/product.service';
import { RegistrationService } from 'src/app/controller/registration.service';
import { Delivery_person } from 'src/app/model/deliveryPerson';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements AfterViewInit, OnInit{
  products: any[] = [];
  delivery: any[]= [];
  users: User[]=[];
  productsCount: number = 0;
  deliverycount: number=0 ;
  usercount:number =0 ;
  constructor(private productService: ProductService , private deliveryperson : DeliveryPersonService , private registrationservice : RegistrationService) { }
  ngOnInit(): void {
    this.getProducts();
    this.getdelivery();
   this. getUsers();
  }

  getProducts() {
    this.productService.getproducts().subscribe(
      (productData: Product[]) => {
        this.products = productData;
        this.productsCount = this.products.length; 
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    );
  }

  getdelivery(){
this.deliveryperson.getdeliverypersons().subscribe(


  (deliveryData: Delivery_person[]) => {
    this.delivery = deliveryData;
    this.deliverycount = this.delivery.length; 
  },
  (error) => {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
  }


);

  }

  getUsers(): void {
    this.registrationservice.getallusers().subscribe(
      (userData: User[]) => { 
        this.users = userData;
        this.usercount = this.users.length; 
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    );
  }
  
 
  customers: number = 1500;
  ordersPerMonth = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [120, 150, 200, 180, 250, 300, 280, 320, 270, 220, 190, 230]
  };
  ordersDeliveredPerDay = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    data: [30, 40, 50, 45, 55, 60, 55]
  };
  deliveryAgents: number = 20;

  @ViewChild('ordersPerMonthChart') ordersPerMonthChart: ElementRef;
  @ViewChild('columnChart') columnChart: ElementRef;

  ngAfterViewInit() {
    this.drawOrdersPerMonthChart();
    this.drawColumnChart();
  }

  private drawOrdersPerMonthChart() {
    const ctx = this.ordersPerMonthChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.ordersPerMonth.labels,
        datasets: [{
          label: 'Orders per Month',
          data: this.ordersPerMonth.data,
          borderColor: '#e5c3d1',
          backgroundColor: '#e5c3d1',
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private drawColumnChart() {
    const ctx = this.columnChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'],
        datasets: [{
          label: 'Ventes',
          data: [50, 60, 70], 
          backgroundColor: '#B97989', 
          borderColor: '#B97989', 
          borderWidth: 1,
          barPercentage: 0.5
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5 // Ajustez la taille des pas sur l'axe y (diminuez l'échelle)
            }
          }
        }
      }
    });
  }
  
  
}
