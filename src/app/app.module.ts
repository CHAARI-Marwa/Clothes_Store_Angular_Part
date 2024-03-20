import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';





import { AppComponent } from './app.component';
import { LoginComponent } from './vue/login/login.component';
import { SignupComponent } from './vue/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './vue/home/home.component';
import { FooterComponent } from './vue/footer/footer.component';
import { HeaderComponent } from './vue/header/header.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderDashComponent } from './vue/header-dash/header-dash.component';
import { SidenavComponent } from './vue/sidenav/sidenav.component';
import { DashboardComponent } from './vue/dashboard/dashboard.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderDashComponent,
    SidenavComponent,
    DashboardComponent,
   
  
    
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
       // * MATERIAL IMPORTS
     MatSidenavModule,
       MatToolbarModule,
       MatMenuModule,
       MatIconModule,
       MatDividerModule,
       MatListModule,
       MatFormFieldModule,
       MatSelectModule,
    
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
