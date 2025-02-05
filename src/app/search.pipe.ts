import { Pipe, PipeTransform } from '@angular/core';
import { SearchInterface } from './search-interface';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(carsList: SearchInterface[], searchItems:string): SearchInterface[] {
    return carsList.filter((item)=>item.make.toLowerCase().includes(searchItems.toLocaleLowerCase()));
  }

}
