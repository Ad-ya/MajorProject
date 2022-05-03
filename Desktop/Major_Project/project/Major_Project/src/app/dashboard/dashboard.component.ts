import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titles = [
    {name : 'Differentiate angulars' , type: 'glyphicon glyphicon-signal' , link: '/next'},
    {name : 'Prediction graph' , type : 'glyphicon glyphicon-object-align-bottom' , link: '/predict'},
    {name : 'Work in progress 2' , type : 'glyphicon glyphicon-eye-open', link: '/home'},
    {name : 'Work in progress 3' , type : 'glyphicon glyphicon-eye-open', link: '/home'},
    {name : 'Work in progress 4' , type : 'glyphicon glyphicon-eye-open', link: '/home'},
    {name : 'Work in progress 5' , type : 'glyphicon glyphicon-eye-open', link: '/home'},
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

}
