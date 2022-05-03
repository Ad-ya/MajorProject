import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  
  chart : any = [];
  data : any = [];
  rows : any = [];
  col1 : any = [];
  col2 : any = [];
  cnt : number = 1;
  constructor(private hist : HistoryService) { 
    // Chart.register(...registerables);
    
  }

  ngOnInit(): void {
    this.data = this.hist.get();
    
    for ( let val of this.data){
      this.col1.push(val.row);
      this.col2.push(val.col);
      this.rows.push(this.cnt);
      this.cnt++;
    }


    // this.chart = new Chart('canvas',{
    //   type: 'line',
    //   data: {
    //     labels: this.rows,
    //     datasets: [{
    //       label: 'Data Accessed',
    //       data: this.col1,
    //       borderWidth: 3,
    //       fill: true,
    //       backgroundColor: 'rgba(93,100,20,0.1)',
    //       borderColor: '#33ffca'
    //     }],
    //   },
    // });    
    console.log(this.col1);
    console.log(this.col2);
    
    this.chart = new Chart('canvas',{
      type: 'line',
      data: {
        labels: this.rows,
        datasets: [
          {
            label: 'Row Count',
            data: this.col1,
            yAxisID: 'y',
          },
          {
            label: 'Column Count',
            data: this.col2,
            yAxisID: 'y1',
          }
        ]
      },
      options: {
        
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        
        
      plugins: {
          title: {
            display: true,
            text: 'Data Acquired with Filters'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            stacked: false
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            stacked: false,
            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
    });    
  
  
  
  
  }
}
