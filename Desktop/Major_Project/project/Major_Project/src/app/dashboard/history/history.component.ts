import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  hist : any;
  constructor(private history:HistoryService) {
      this.hist = this.history.get();
      console.log(this.hist);
   }

  ngOnInit(): void {
  }

}
