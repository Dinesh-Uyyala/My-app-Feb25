import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _router:Router){}
logout(){
  if(confirm("Are you sure to Logout?")==true){
    sessionStorage.removeItem('token');
    alert("You Logged out successfully!");
    this._router.navigateByUrl("/login");
  }else{
    alert("You have cancelled!");
  }
  
}
}
