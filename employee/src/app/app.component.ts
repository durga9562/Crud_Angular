import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  employee:any=[];
  constructor(private userService:UserService){}
  ngOnInit(){
    this.userService.getAllUsers().subscribe((data)=>
    {
      this.employee=data;
      console.log(this.employee);
    })
  }
}
