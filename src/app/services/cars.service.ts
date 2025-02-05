import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchInterface } from '../search-interface';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(public http:HttpClient) {

  }

getAllCars():Observable<SearchInterface[]>{
  return this.http.get<SearchInterface[]>(`https://www.freetestapi.com/api/v1/cars`)
}
getfouritems():Observable<SearchInterface[]>{
  return this.http.get<SearchInterface[]>(`https://www.freetestapi.com/api/v1/cars?limit=4`)
}
getCarsbyId(id:number):Observable<SearchInterface[]>{
  return this.http.get<SearchInterface[]>(`https://www.freetestapi.com/api/v1/cars/${id}`)
}


}
