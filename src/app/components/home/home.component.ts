import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService : DataServiceService ) { }

  ngOnInit() {
    this.dataService.getGlobatData()
    .subscribe(
      {
        next : (result)=>{
          console.log(result);
          
        }
      }
    )
  }

}
