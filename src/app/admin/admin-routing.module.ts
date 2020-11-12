import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {ClinicsComponent} from './clinics/clinics.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClinicRegistrationComponent} from './clinicregistration/clinicregistration.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'adminClinics',
    component: ClinicsComponent
  },
  {
    path: 'adminProfile',
    component: ProfileComponent
  },
  {
    path: 'adminDashboard',
    component: DashboardComponent
  },
  {
    path: 'adminClinic',
    component: ClinicRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
