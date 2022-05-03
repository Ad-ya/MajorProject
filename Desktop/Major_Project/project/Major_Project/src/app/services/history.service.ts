import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  //data model
  //row count:    
  //col count:
  //data count: 
  dataframe : any;
  constructor() { 
    this.dataframe = [];
  }

  append(data:any){
    this.dataframe.push(data);
  }

  get(){
    return this.dataframe;
  }
}
