import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { GlobalDataSummary } from "src/app/models/global-data";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-16-2020.csv`;
  
  constructor(private http : HttpClient) { }

  getGlobatData(){
    return this.http.get(this.globalDataUrl , {responseType : 'text'}).pipe(
      map(result=>{

        let data : GlobalDataSummary[] = [];
        let raw = {}
        let rows = result.split('\n');
        // console.log(rows);
        rows.splice(0 , 1);
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/);
          // console.log(cols);
          
          let cs = {
            country:cols[3],
            confirmed: +cols[7],
            active: +cols[10],
            deaths: +cols[8],
            recovered: +cols[9]
          };

          let temp:GlobalDataSummary = raw[cs.country]
          if(temp){
            temp.active = cs.active + temp.active;
            temp.confirmed = cs.confirmed + temp.confirmed;
            temp.deaths = cs.deaths + temp.deaths;
            temp.recovered = cs.recovered + temp.recovered;

            raw[cs.country] = temp;
          }else{
            raw[cs.country] = cs;
          }

          
          // data.push()
          
          
        })
        // console.log(raw);
        


        return Object.values(raw);
      })
    )
    
  }
}
