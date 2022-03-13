import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titles = [
    {name :'Electronic Sales' , type: 'glyphicon glyphicon-signal'},
    {name :'Sales Charts' , type: '	glyphicon glyphicon-object-align-bottom'},
    {name : 'Default-1' , type : 'glyphicon glyphicon-eye-open'},
    {name : 'Default-2' , type : 'glyphicon glyphicon-eye-open'},
    {name : 'Default-3' , type : 'glyphicon glyphicon-eye-open'},
    {name : 'Default-4' , type : 'glyphicon glyphicon-eye-open'},
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

}
