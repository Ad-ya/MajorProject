import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { FilterserviceService } from '../services/filterservice.service';

@Component({
  selector: 'next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  filters:any;
  colcount:any;
  rowcount:any;
  heading:any;
  dataset:any;
  constructor(private fservice : FilterserviceService , private data : ContentService) { 
    this.filters = this.fservice.getfilterList();
    this.dataset = this.data.getdata();
    this.colcount = this.filters[1].count;
    this.rowcount = this.filters[0].count;
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.colcount = this.filters[1].count;
    this.rowcount = this.filters[0].count;
    console.log('updated'+this.rowcount+this.colcount);
  } 
}

//During first run, if we go to filters and then come back to home and open next component, the col value isn't loaded and no data is shown on the screen 
//DEBUG: 27-04-22 