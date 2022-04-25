import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property';
  name:String="The property binding is Angular";
  number:number=1543;
  imgUrl = "https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png"; 
}
