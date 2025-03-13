import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=true;
  
  states:string[]=['Andhra Pradesh','Karntaka',
    'Kerala','Maharashtra','Tamilnadu','Telangana'];

  products:any=[
    {name:'pen',price:10,rating:3.7},
    {name:'book',price:50,rating:1.9},
    {name:'shirt',price:479,rating:4.3},
    {name:'Shoes',price:1599,rating:5},
    {name:'Bike',price:100000,rating:4.9},
    {name:'Car',price:1000000,rating:4.0}
  ]

  newDate:any=new Date();
}
