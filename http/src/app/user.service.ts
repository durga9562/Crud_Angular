import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
external_api="http://localhost:3000/posts";
  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get(this.external_api)
  }
}
