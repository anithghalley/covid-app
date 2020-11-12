import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LogInComponent} from './log-in/log-in.component';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'logIn',
    component: LogInComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
