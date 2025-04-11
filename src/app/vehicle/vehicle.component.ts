import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { UpperCasePipe } from "@angular/common";
import { BalancePipe } from "../balance.pipe";
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class VehicleComponent implements OnInit{
  term:string='';
  vehicles:any=[];
  isLoading=true;

  searchControl =new FormControl();

  ngOnInit(){
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      switchMap(search=>this._vehicleService.getFilteredVehicles(search))
    ).subscribe(
      (data:any)=>{
        console.log(data);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  filter(){
  this._vehicleService.getFilteredVehicles(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
}

column:string='';
order:string='';

sort(){
  this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
}

constructor(private _vehicleService:VehicleService){
  this.loadVehicles();
}
loadVehicles(){
  this._vehicleService.getVehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      this.isLoading=false;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
delete(id:any){
  if(confirm("Are you sure to delete?")==true){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Record Deleted Successfully!");
        this.loadVehicles();
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }else{
    alert("You have cancelled!")
  } 
}

limit:string='';
page:string='';
pagination(){
  this._vehicleService.getPaginatedVehicles(this.limit,this.page)
  .subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}

// fetchVehicles() {
//   this.isLoading = true;

//   fetch('https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list?page=1&limit=100')
//     .then(res => res.json())
//     .then(data => {
//       this.vehicles = data;
//       this.isLoading = false;
//     })
//     .catch(error => {
//       console.error('Error fetching vehicles:', error);
//       this.isLoading = false;
//     });
// }
}
