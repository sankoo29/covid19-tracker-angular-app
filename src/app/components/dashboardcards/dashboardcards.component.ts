import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboardcards',
  templateUrl: './dashboardcards.component.html',
  styleUrls: ['./dashboardcards.component.css']
})
export class DashboardcardsComponent implements OnInit {

  @Input('totalconfirmed')
  totalconfirmed;
  @Input('totalactive')
  totalactive;
  @Input('totaldeaths')
  totaldeaths;
  @Input('totalrecovered')
  totalrecovered;

  constructor() { }

  ngOnInit() {
  }

}

