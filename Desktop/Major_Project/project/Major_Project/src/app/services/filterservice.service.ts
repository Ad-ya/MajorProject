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
        count : 5,
        isActive: true
      },
      {
        id: 'columns',
        count: 3,
        isActive: true
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
