import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
  ]},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
