import { Component } from '@angular/core';
import { User } from '../user';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {


  user:User={
    name:'Dinesh',
    email:'dinesh@gmail.com',
    age:28
  };

  constructor(private loaderService:LoaderService){}

  ngOnInit() {
    this.loaderService.show();
    setTimeout(() => {
    this.loaderService.hide();
    }, 2000); // Simulating API call
    }
}
