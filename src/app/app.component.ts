import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-Feb25';
  isLoading = false;
  constructor(private loaderService: LoaderService) {
  this.loaderService.loading$.subscribe(status => {
  this.isLoading = status;
  });
  }
}
