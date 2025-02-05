import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  carId:number=0
  carObj:any={}

  constructor(public _activatedRoute:ActivatedRoute, public _carsServices:CarsService){
  _activatedRoute.params.subscribe((param:any)=>{
this.carId=param.id
  })
  }
ngOnInit(): void {
  this.onGetCarbyid();
}
  onGetCarbyid(){
    this._carsServices.getCarsbyId(this.carId).subscribe((res:any)=>{
      this.carObj=res
    })
  }


}
