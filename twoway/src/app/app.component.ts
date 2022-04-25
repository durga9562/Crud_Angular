import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twoway';
 sum:any;
 sub:any;
 mul:any;
 divi:any;

 addNumbers(fn:any,sn:any):void{
   this.sum=(+fn)+(+sn);
 }
 subNumbers(fn:any,sn:any):void{
  this.sub=(-fn)-(-sn);
}
mulNumbers(fn:any,sn:any):void{
  this.mul=(fn)*(sn);
}
diviNumbers(fn:any,sn:any):void{
  this.divi=(fn)/(sn);
}
}
