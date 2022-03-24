import { Component, OnInit } from '@angular/core';
import {FilterserviceService} from '../services/filterservice.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterlist : any;
  constructor(private filservice : FilterserviceService) {

   }

  ngOnInit(): void {
    this.filterlist = this.filservice.getfilterList();
  }

}
