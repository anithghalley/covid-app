import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recoveredUser = [];
  infectedUser = [];
  constructor(private adminService: AdminService, private router: Router) { }

  columns = ["User Id", "User Name", "Gender", "Age", "Days Since Infected", "Status", "Location of Infected"];

  index  = ["id", "userName", "gender", "age", "daysSinceInfection", "status", "locationInfection"];

  users : User[] = [];

  ngOnInit(): void { 
    this.getSortedUser();
  }

  getSortedUser(){ 
    this.adminService.getUsers().subscribe(
      (response) =>{ 
       response.forEach(user => {
         if(user.status === 'Recovered') {
           this.recoveredUser.push(user);
         } else {
           this.infectedUser.push(user);
         }
       })
      },
      (error) =>
      {
        console.log("Error Occured : "+error);
      }
    )
  }

  deleteUser(user){
    this.adminService.deleteUser(user).subscribe(()=>{
      this.getSortedUser(),
      location.reload();
    }
    );
    
  }

}
  

// import { Component, OnInit } from '@angular/core';
// import {SharedService} from '../../Shared/shared.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   constructor(private sharedService: SharedService) { }
//   users;
//   acceptedUser;
//   ngOnInit() {
//     this.getUsers();
//   }
// getUsers() {
//     this.sharedService.getUsers().subscribe( (respondUsers: Array<any>) => {
//     const usersdb = respondUsers;
//     this.users = usersdb.filter(value => value.role === 'user' && !(!!value.permissionAccess));
//     });
//   }
//   approve(user) {
//     debugger
//     user.permissionAccess = true;
//     this.sharedService.updateAccessPermission(user.id, user).subscribe( res => {
//       this.acceptedUser = res;
//     });
//   }
// }
