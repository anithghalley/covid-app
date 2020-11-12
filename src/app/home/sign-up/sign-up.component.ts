import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  success = false;
  value;
  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.signUpForm = this.fb.group({
      name: [null, Validators.required],  
      userName: [null, Validators.required],  
      password: [null, Validators.required],  
      conPassword: [null, Validators.required],  
      gender: [null, Validators.required],  
      age: [null, Validators.required],  
      dayofInfection: ['', Validators.required],  
      daysSinceInfection: [null, Validators.required],  
      role : "user",
      status: ['', Validators.required],  
      cID: [null, Validators.required],  
      recoverydate: ['', Validators.required],  
      locationInfection: [null, Validators.required]
    });
  }
  submit() {
    this.homeService.createUsers(this.signUpForm.value).subscribe(
      () => {
        this.success = true,
          setTimeout( () => this.router.navigate(['/home/logIn']), 1000);
      },
       err => console.log(err)
      );
  }
}
