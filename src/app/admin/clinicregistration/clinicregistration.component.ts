import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clinicregistration',
  templateUrl: './clinicregistration.component.html',
  styleUrls: ['./clinicregistration.component.css']
})
export class ClinicRegistrationComponent implements OnInit {

  clinicForm: FormGroup;
  success = false;
  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.clinicForm = this.fb.group({
      clinicName: [''],
      Location: [''],
      totalBed: [''],
      totalStaff: [''],
      nameSuperintendent: [''],
      contactSuperintendent: [''],
      activeCase: [''],
      recoverCase: [''],
    });
  }
  submit() {
    this.adminService.registerClinic(this.clinicForm.value).subscribe(
      () => { 
        this.success = true,
          setTimeout( () => this.router.navigate(['/admin/dashboard']), 1000);
      },
       err => console.log(err)
      );
  }
}


