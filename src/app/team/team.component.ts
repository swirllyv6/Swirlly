import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  siteVisitors : number = Math.floor(1000*Math.random()) + 1;
  constructor() { }
  
  ngOnInit(): void {

    this.siteVisitors++;
  }

}
