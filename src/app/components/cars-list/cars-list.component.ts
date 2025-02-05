import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{

carsList:any[]=[]
pageNumber:number=1
searchtext:string=''

constructor(public _carservice:CarsService){

}

ngOnInit(): void {
  this.onGettingcars()
}

onGettingcars():void{
  this._carservice.getAllCars().subscribe((res:any)=>{
   this.carsList=res
  })
}
}
