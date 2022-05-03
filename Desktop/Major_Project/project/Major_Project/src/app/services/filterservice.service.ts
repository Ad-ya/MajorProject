import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterserviceService {

  filterlist : any[];

  constructor() { 
    this.filterlist = [
      {
        id: 'rows',
        count : 2,
        isActive: false
      },
      {
        id: 'columns',
        count: 1,
        isActive: false
      }
    ]
  }

  getfilterList(){
    return this.filterlist;
  }

  updatefilter(index: number , value : any){
    this.filterlist[index] = value; 
  }
}
