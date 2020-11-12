import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import { ClinicRegistrationComponent } from './clinicregistration/clinicregistration.component';
import {SharedService} from '../Shared/shared.service';


@NgModule({
  declarations: [AdminComponent, ProfileComponent, ClinicsComponent, DashboardComponent, ClinicRegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule

  ],
  providers: [SharedService]
})
export class AdminModule { }

// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeRoutingModule } from './home-routing.module';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { LogInComponent } from './log-in/log-in.component';
// import {HomeComponent} from './home.component';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {HttpClientModule} from '@angular/common/http';
// import {HomeService} from './home.service';
// import { MaterialModule } from '../material.module';

// import {  
//   MatButtonModule,  
//   MatMenuModule,  
//   MatToolbarModule,  
//   MatIconModule,  
//   MatCardModule,  
//   MatFormFieldModule,  
//   MatInputModule,  
//   MatDatepickerModule,  
//   MatDatepicker,  
//   MatNativeDateModule,  
//   MatRadioModule,  
//   MatSelectModule,  
//   MatOptionModule,  
//   MatSlideToggleModule  
// } from '@angular/material';  

// @NgModule({
//   declarations: [LogInComponent, SignUpComponent, HomeComponent],
//   exports: [
//     SignUpComponent,
//     HomeComponent, 
//     MatButtonModule,  
//     MatMenuModule,  
//     MatToolbarModule,  
//     MatIconModule,  
//     MatCardModule,  
//     MatFormFieldModule,  
//     MatInputModule,  
//     MatDatepickerModule,  
//     MatNativeDateModule,  
//     MatRadioModule,  
//     MatSelectModule,  
//     MatOptionModule,  
//     MatSlideToggleModule    
//   ],
//   imports: [
//     CommonModule,
//     HomeRoutingModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule,
//     MaterialModule, 
//     MatButtonModule,  
//     MatMenuModule,  
//     MatToolbarModule,  
//     MatIconModule,  
//     MatCardModule,   
//     MatFormFieldModule,  
//     MatInputModule,  
//     MatDatepickerModule,  
//     MatNativeDateModule,  
//     MatRadioModule,  
//     MatSelectModule,  
//     MatOptionModule,  
//     MatSlideToggleModule,
//   ],  
  

//   providers: [HomeService],

//   bootstrap: [],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]

// })
// export class HomeModule { }

