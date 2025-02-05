import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StringonlyDirective } from './stringonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarsDetailsComponent,
    SearchPipe,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    StringonlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
