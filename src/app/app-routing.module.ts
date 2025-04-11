import { Component, NgModule } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DummyComponent } from './dummy/dummy.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { LifeCycleHooksComponent } from './about-us/life-cycle-hooks/life-cycle-hooks.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoaderService } from './loader.service';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'vehicle',component:VehicleComponent,canActivate:[AuthenticationGuard]},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'dummy',component:DummyComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'about-ceo',component:AboutCeoComponent}, 
    {path:'about-company',component:AboutCompanyComponent},
    {path:'book',component:BookComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    },
    {path:'life-cycle-hooks',component:LifeCycleHooksComponent},
    {path:'calculator',component:CalculatorComponent},
  ]},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router, private loaderService: LoaderService) {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
    this.loaderService.show();
    } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
    this.loaderService.hide();
    }
    });
    }
}
