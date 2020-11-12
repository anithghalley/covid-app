import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ClinicComponent } from './clinic/clinic.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import {UserComponent} from './user.component';


@NgModule({
  declarations: [ClinicComponent, DashBoardComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
