import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngif';
  status:boolean=true;
  changeStatus(){
    this.status=!this.status
  }
}
