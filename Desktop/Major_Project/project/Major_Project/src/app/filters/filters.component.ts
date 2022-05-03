import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import {FilterserviceService} from '../services/filterservice.service';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})




export class FiltersComponent implements OnInit,OnDestroy {
  upload : any;
  download: any;
  rold : number;
  cold : number;
  rnew!: number;
  cnew!: number;
  alter1: boolean;
  alter2: boolean;
  override: number;
  event_url: any = 'something'; 

  constructor(private filservice : FilterserviceService, private router: Router, private history:HistoryService) {
    this.override = 0;
    this.download = filservice.getfilterList();
    this.alter1 = this.download[0].isActive;
    this.alter2 = this.download[1].isActive;
    if(!this.alter1)
      this.rold = this.download[0].count;
    else{
        this.rnew=this.rold= 10;

        this.override += 1;
    }
    if(!this.alter2)  
      this.cold = this.download[1].count;
    else{  this.cnew = this.cold = 10;
      this.override += 2;
    }
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any)=> 
    {
      this.event_url = event.url;
      console.log(event );
      console.log(event.url );
      console.log(this.event_url);
    });
    if(this.override){
      this.updatesome(this.override);
    }
  }

  updatesome(a : number){
    if(a == 1 || a == 3){
      this.upload = {
        id: 'rows',
        count : <number>this.rnew,
        isActive: this.alter1
      };
      this.filservice.updatefilter(0,this.upload);
    }
    if(a == 2 || a == 3 ){
      this.upload = {
        id: 'columns',
        count : <number>this.cnew,
        isActive: this.alter2
      };
      this.filservice.updatefilter(1,this.upload);
    }
  }

  ngOnDestroy(): void {
      this.updatesome(3);
      if(this.event_url == '/next')
        this.history.append({
          row: this.rold,
          col: this.cold,
          rec: this.cold*this.rold
        });
      
  }

  ngOnInit(): void {
  }


  @ViewChild('row')
  row!: ElementRef;
  @ViewChild('col')
  col!: ElementRef;
  
  uRange(){
    this.rnew = this.row.nativeElement.value;
    this.cnew = this.col.nativeElement.value;
    if(this.rold != this.rnew){
      this.upload = {
        id: 'rows',
        count : <number>this.rnew,
        isActive: this.alter1
      };
      this.filservice.updatefilter(0,this.upload);
      this.rold = this.rnew;
    }
    if(this.cold != this.cnew){
      this.upload = {
        id: 'columns',
        count : <number>this.cnew,
        isActive: this.alter2
      };
      this.filservice.updatefilter(1,this.upload);
      this.cold = this.cnew;
    }
    console.log(this.upload);
    console.log(this.rold );
    console.log(this.cold );
    
  }
}  



