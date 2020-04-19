import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  totalconfirmed = 0;
  totaldeaths = 0;
  totalactive = 0;
  totalrecovered = 0;

  data : GlobalDataSummary[];
  countrylist : string[] = [];
  constructor(private service : DataServiceService) { }

  ngOnInit() {
    this.service.getGlobatData().subscribe(result=>
      {
        this.data = result;
        this.data.forEach(cs=>{
          this.countrylist.push(cs.country);
        })
      })
  }

  updatevalues(country :string){
    // console.log(country);

    this.data.forEach(cs=>{
      if(cs.country == country){
        this.totalconfirmed = cs.active;
        this.totalconfirmed = cs.confirmed;
        this.totaldeaths = cs.deaths;
        this.totalrecovered = cs.recovered;
      }
    })
    
  }

}
