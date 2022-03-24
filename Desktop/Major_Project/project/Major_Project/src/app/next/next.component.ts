import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

// need observvable to maintain global data and services to access them
  constructor() { }

  ngOnInit(): void {
  }

  afirst(){
    console.log('Filter enabled');
  }

}
