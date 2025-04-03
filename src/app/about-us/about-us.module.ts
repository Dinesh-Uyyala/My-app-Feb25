import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutCompanyComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
