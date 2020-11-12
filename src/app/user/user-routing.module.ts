import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClinicComponent} from './clinic/clinic.component';
import {DashBoardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
      {
        path: 'userClinic',
        component: ClinicComponent
      },
      {
        path: 'userDashBoard',
        component: DashBoardComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
