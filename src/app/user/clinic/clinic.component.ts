import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { Clinic } from 'src/app/clinic';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  ThimphuClinic = [];
  ParoClinic = [];
  PhuntsholingClinic = [];
  GelephuClinic = [];
  SJongkharClinic = []; 
  constructor(private shareService: SharedService, private router: Router) { }

  columns = ["User Id", "Clinic Name", "Total Bed", "Total Staff", "Superintendent(Name)", "Superintendent(Contact)", "activeCase", "Recovered Case"];

  index  = ["id", "clinicName", "totalBed", "totalStaff", "nameSuperintendent", "contactSuperintendent", "activeCase", "recoveredCase"];

  clinics : Clinic[] = [];

  ngOnInit(): void { 
    this.getSortedClinic();
  }

  getSortedClinic(){  debugger;
    this.shareService.getClinics().subscribe(
      (response) =>{ 
       response.forEach(clinic => {
         if(clinic.Location === 'Thimphu') {
           this.ThimphuClinic.push(clinic);
         } 
         else if(clinic.Location === 'Paro') {
          this.ParoClinic.push(clinic);
        } 
        else if(clinic.Location === 'Gelephu') {
          this.GelephuClinic.push(clinic);
        } 
        else if(clinic.Location === 'Phuntsholing') {
          this.PhuntsholingClinic.push(clinic)
        }
        else {
          this.SJongkharClinic.push(clinic);
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

 



