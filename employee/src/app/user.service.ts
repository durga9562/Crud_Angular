import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
employee_api="http://localhost:3000/employee";
  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get(this.employee_api);
  }
}
