import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Clinic } from '../clinic';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  url_user : string = "http://localhost:3000/users";

  url_clinic : string = "http://localhost:3000/clinics";

  registerClinic(clinic) {
    return this.http.post('http://localhost:3000/clinics', clinic);
  }

  getUsers()
  {
    return this.http.get<User[]>(this.url_user);
  }
  getClinics()
  {
    return this.http.get<Clinic[]>(this.url_clinic);
  }

  deleteUser(user) { 
    return this.http.delete("http://localhost:3000/users/" +user)
  }
  
  deleteClinic(clinic) { 
    return this.http.delete("http://localhost:3000/clinics/" +clinic)
  }

}
