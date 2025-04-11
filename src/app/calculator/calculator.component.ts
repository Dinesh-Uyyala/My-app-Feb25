import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { concatMap, from } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1:number=0;
  num2:number=0;
  sum:number=0;
  calculate(){
    this.sum=this.num1+this.num2;
  }

  data=[
    {id:1,name:'Dinesh',age:28},
    {id:2,name:'Ramesh',age:30},
    {id:3,name:'Suresh',age:25}
  ]

constructor(private _userService:UserService){}

  updateUser(){
    from(this.data).pipe(concatMap(user=>
      this._userService.updateUser(user.id,user)
    )).subscribe(
    (data:any)=>{
      console.log(data);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
  }

}
