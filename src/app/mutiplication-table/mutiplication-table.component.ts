import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mutiplication-table',
  templateUrl: './mutiplication-table.component.html',
  styleUrls: ['./mutiplication-table.component.css']
})
export class MutiplicationTableComponent implements OnInit {
  list : number[] ;
  constructor() { }


  ngOnInit() {
    this.list =[1,2,3,4,5,6,7,8,9];
  }

}