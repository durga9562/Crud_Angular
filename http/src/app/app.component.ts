import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  posts:any=[];
  constructor(private userService:UserService){}
  
  ngOnInit(){
    this.userService.getAllUsers().subscribe((data:any)=>
    {
      this.posts=data;
      console.log(this.posts);
    });
  }
}
