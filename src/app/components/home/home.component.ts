import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  totalconfirmed = 0;
  totalactive = 0;
  totaldeaths = 0;
  totalrecovered = 0;
  globalData : GlobalDataSummary[];
  pieChart : GoogleChartInterface = {
    chartType : 'PieChart',
  };

  columnChart : GoogleChartInterface = {
    chartType : 'ColumnChart'
  }

  constructor(private dataService : DataServiceService ) { }


  ngOnInit() {
    this.dataService.getGlobatData()
    .subscribe(
      {
        next : (result)=>{
          // console.log(result);
          this.globalData = result; 
          // console.log(this.globalData);
          
          result.forEach(cd=>{
            // this.globalData.push(cd);
            if(!Number.isNaN(cd.confirmed)){
            this.totalactive += cd.active;
            this.totalconfirmed += cd.confirmed;
            this.totaldeaths += cd.deaths;
            this.totalrecovered += cd.recovered;
            }
          })
          this.initchart('c'); 
        } 
      }
    )
    
  }

  initchart(casetype : string){
    // console.log(this.globalData);
    
    
    
    let datatable = [];
    datatable.push(["country","cases"]);
    // console.log("sanket");
    
    // console.log(this.globalData);
    

    this.globalData.forEach(cs =>{
      // value = 0;
      let value: number;
      // console.log(casetype);
      
      if(casetype == 'c'){
        // console.log("confirmed");
        
        if(cs.confirmed > 2000)
          value = cs.confirmed
      }
      
      if(casetype == "a"){
        // console.log("active");
        
        if(cs.active > 200)
          value = cs.active;
      }
      if(casetype == "r")
        if(cs.recovered > 200)
          value = cs.recovered;
      
      if(casetype == "d")
        if(cs.deaths > 200)
          value = cs.deaths;
      
          // console.log(value);
          
      datatable.push([cs.country , value]);
          
    })
    console.log(datatable);
    
    this.pieChart = {
      chartType:'PieChart',
      dataTable : datatable,
      options: {
        'height' : 500,
      }
    };

    this.columnChart = {
      chartType:'ColumnChart',
      dataTable : datatable,
      options: { 
        'height' : 500,
      }
    };
  }

  updatechart(input : HTMLInputElement){
    // console.log(input.value);
    this.initchart(input.value);
  }

}