import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  @Input('titlename') titlename: any;
  constructor() {
    this.titlename = [{name :'default_name',
                      type: 'glyphicon glyphicon-eye-close'}];
   }

  ngOnInit(): void {
  }

}
