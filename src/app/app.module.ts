import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatFormFieldModule,  
  MatInputModule,  
  MatDatepickerModule,  
  MatDatepicker,  
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule,  
  MatSlideToggleModule,
} from '@angular/material';  
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HomeModule,
    UserModule,
    AdminModule,

    MaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,   
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule  
  ],

  exports: [  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule  
  ], 
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
