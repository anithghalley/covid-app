import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Clinic } from 'src/app/clinic';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  ThimphuClinic = [];
  ParoClinic = [];
  PhuntsholingClinic = [];
  GelephuClinic = [];
  SJongkharClinic = []; 
  constructor(private adminService: AdminService, private router: Router) { }

  columns = ["User Id", "Clinic Name", "Total Bed", "Total Staff", "Superintendent(Name)", "Superintendent(Contact)", "activeCase", "Recovered Case"];

  index  = ["id", "clinicName", "totalBed", "totalStaff", "nameSuperintendent", "contactSuperintendent", "activeCase", "recoveredCase"];

  clinics : Clinic[] = [];

  ngOnInit(): void { 
    this.getSortedClinic();
  }

  getSortedClinic(){ 
    this.adminService.getClinics().subscribe(
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

  deleteClinic(clinic){
    this.adminService.deleteClinic(clinic).subscribe(()=>{
      this.getSortedClinic(),
      location.reload();
    }
    );
    
  }

}



