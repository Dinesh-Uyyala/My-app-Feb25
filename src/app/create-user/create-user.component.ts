import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { googleMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(){ 
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{ 
        if(data=='dayScholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');
        }else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    ) 
  }
  
  
    submit(){
      console.log(this.userForm);
    }

  public userForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    email:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),googleMail]),
    password:new FormControl(),
    mobile:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    type:new FormControl(),
    // busFee:new FormControl(),
    // hostelFee:new FormControl(),
    cards: new FormArray([]),
  })


  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl()
      })
    )
  }
  deletecard(i:number){
      this.cardsFormArray.removeAt(i);
  }
}
