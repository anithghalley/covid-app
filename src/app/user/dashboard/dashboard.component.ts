import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {
  recoveredUser = [];
  infectedUser = [];
  constructor(private sharedService: SharedService, private router: Router) { }

  columns = ["User Id", "User Name", "Gender", "Age", "Days Since Infected", "Status", "Location of Infected"];

  index  = ["id", "userName", "gender", "age", "daysSinceInfection", "status", "locationInfection"];

  users : User[] = [];

  ngOnInit(): void { 
    this.getSortedUser();
  }

  getSortedUser(){ 
    this.sharedService.getUsers().subscribe(
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

}
