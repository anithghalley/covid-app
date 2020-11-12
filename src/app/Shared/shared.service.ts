import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import { Clinic } from '../clinic';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }

  url_clinic : string = "http://localhost:3000/clinics";

  url_user : string = "http://localhost:3000/users";

  getUsers()
  {
    return this.http.get<User[]>(this.url_user);
  }
  getClinics()
  {
    return this.http.get<Clinic[]>(this.url_clinic);
  }
  
}
