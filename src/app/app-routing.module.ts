import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cars/:id',component:CarsDetailsComponent},
  {path:'cars-list',component:CarsListComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
