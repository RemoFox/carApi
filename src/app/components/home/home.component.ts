import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
carsList:any[]=[]
pageNumber:number=1
searchtext:string=''

constructor(public _carservice:CarsService){

}

ngOnInit(): void {
  this.onGettingcars()
}

onGettingcars():void{
  this._carservice.getfouritems().subscribe((res:any)=>{
   this.carsList=res
  })
}
}
